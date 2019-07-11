/* eslint-disable */

const path = require('path');

module.exports = async ({ config, mode }) => {
    config.resolve.extensions.push(
        '.es6',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.styl',
        '.less',
        '.sass',
        '.css',
        '.md'
    );
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        storybook: path.resolve(__dirname, 'component'),
        'storybook-atom': path.resolve(__dirname, 'component/atoms'),
        'storybook-template': path.resolve(__dirname, 'component/templates')
    };
    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    compact: false
                }
            }
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loaders: [require.resolve('@storybook/addon-storysource/loader')],
            enforce: 'pre'
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['css-loader']
        },
        {
            test: /\.styl(us)?$/,
            exclude: /node_modules/,
            use: ['css-loader', 'stylus-loader']
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }
    ];
    return config;
};
