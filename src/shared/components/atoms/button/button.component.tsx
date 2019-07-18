import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PropsInterface } from './interfaces/component.interfaces';

import './style/style.scss';
import { convert_obj_to_string } from '@/shared/utils/string.utils';

class Button extends React.Component<PropsInterface> {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
        onClick: PropTypes.func,
        styling: PropTypes.oneOf(['default', 'border'])
    };

    static defaultProps = {
        onClick: () => {},
        styling: 'default'
    };

    get className(): string {
        let { styling } = this.props;

        if (!styling) {
            styling = 'default';
        }

        return convert_obj_to_string({
            'ui-atomic-button': true,
            [`ui-atomic-button--style-${styling}`]: true,
            'shadow--effect-elevate-md': true
        });
    }

    render(): React.ReactNode {
        const { children, onClick } = this.props;
        const { className } = this;

        return (
            <button type="submit" className={className} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;
