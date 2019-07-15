import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

import './style/style.scss';

class Button extends React.Component<DefaultPropsInterface> {
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
            <button type="submit" className="ui-atomic-button shadow--effect-elevate-md">
                {children}
            </button>
        );
    }
}

export default Button;
