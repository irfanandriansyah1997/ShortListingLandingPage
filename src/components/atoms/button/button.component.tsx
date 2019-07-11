import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface ButtonProps {
    disable?: boolean;
    display?: string;
    outline?: boolean;
    position?: string;
    shadow?: boolean;
    noBorder?: boolean;
    size?: 'default' | 'small' | string;
    buttonType: 'primary' | 'secondary' | 'tertiary';
    [key: string]: any;
}

class Button extends React.Component<ButtonProps> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    };

    static defaultProps = {};

    render(): React.ReactNode {
        const { children } = this.props;

        return <button type="submit">{children}</button>;
    }
}

export default Button;
