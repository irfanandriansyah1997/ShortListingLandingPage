module.exports = {
    env: {
        browser: true,
        node: true,
        jasmine: true,
        jest: true
    },
    plugins: ['@typescript-eslint'],
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        typescript: true,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true
        }
    },
    rules: {
        'arrow-parens': [0],
        'class-methods-use-this': [
            0,
            {
                exceptMethods: ['render']
            }
        ],
        'comma-dangle': [2, 'never'],
        'generator-star-spacing': 'off',
        indent: [2, 4],
        'import/no-duplicates': [0],
        'import/no-extraneous-dependencies': [0],
        'import/no-unresolved': [0],
        'import/prefer-default-export': [0],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6']
            }
        },
        'jsx-a11y/label-has-for': [
            2,
            {
                components: ['Label'],
                required: {
                    every: ['nesting', 'id']
                },
                allowChildren: true
            }
        ],
        'linebreak-style': [2, 'unix'],
        'max-len': [
            2,
            {
                code: 140
            }
        ],
        'no-bitwise': [
            1,
            {
                allow: ['~', '>>>', '>>', '<<', '|', '&'],
                int32Hint: true
            }
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'no-restricted-properties': [0],
        'no-underscore-dangle': [0],
        'no-unused-vars': [
            0,
            {
                argsIgnorePattern: 'next'
            }
        ],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'space-before-function-paren': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-unescaped-entities': 0,
        'react/no-danger': 0,
        'react/require-default-props': 2,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-max-props-per-line': [1, { maximum: 0, when: 'multiline' }],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ],
        'react/jsx-indent': [1, 4],
        'space-infix-ops': [0],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0, // would prefer to enable this
        '@typescript-eslint/no-use-before-define': 0, // this is duplicated
        '@typescript-eslint/interface-name-prefix': 0 // I don't agree
    },
    globals: {
        document: false,
        window: true,
        Image: true
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                'vars-on-top': 0,
                'no -var': 0, // this is how typescript works
                'spaced-comment': 0
            }
        }
    ]
};
