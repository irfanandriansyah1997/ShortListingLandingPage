import * as React from 'react';
import * as PropTypes from 'prop-types';

interface TextProps {
    textType: string;
}

class Text extends React.Component<TextProps> {
    static propTypes = {
        children: PropTypes.string.isRequired,
        textType: PropTypes.string
    };

    static defaultProps = {
        textType: 'p'
    };

    render(): React.ReactNode {
        const { children, textType } = this.props;

        return React.createElement(textType, {}, children);
    }
}

export default Text;
