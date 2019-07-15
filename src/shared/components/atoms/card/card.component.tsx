/**
 * Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { convert_obj_to_string } from '@/shared/utils/string.utils';
import { PropsInterface } from './interfaces/component.interface';

import './style/style.scss';

class Card extends React.Component<PropsInterface> {
    static propTypes = {
        type: PropTypes.oneOf(['base', 'flat', 'border']).isRequired,
        hoverType: PropTypes.oneOf([
            'default-1',
            'default-2',
            'elevate-xs',
            'elevate-sm',
            'elevate-md',
            'elevate-lg',
            'elevate-xl'
        ]).isRequired,
        rounded: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        className: '',
        rounded: false
    };

    get className(): string {
        const {
            className, rounded, type, hoverType
        } = this.props;

        return convert_obj_to_string({
            [`${className}`]: true,
            'ui-atomic-image': true,
            relative: true,
            'inline-flex': true,
            'ui-atomic-card': true,
            'ui-atomic-card--rounded': rounded,
            [`ui-atomic-card--type-${type}`]: true,
            [`shadow--effect-${hoverType}`]: true
        });
    }

    render(): React.ReactNode {
        const { className } = this;
        const { children } = this.props;

        return <div className={className}>{children}</div>;
    }
}

export default Card;
