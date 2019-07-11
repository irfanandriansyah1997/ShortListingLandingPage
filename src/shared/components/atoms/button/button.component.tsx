import * as React from 'react';
import * as PropTypes from 'prop-types';

import './style.scss';

class Button extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    };

    render(): React.ReactNode {
        const { children } = this.props;

        return (
            <button type="submit" className="button">{children}</button>
        );
    }
}

export default Button;
