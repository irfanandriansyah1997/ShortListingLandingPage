/**
 * Avatar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.09
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import ImageComponent from '@/shared/components/atoms/image/image.component';
import { convert_obj_to_string } from '@/shared/utils/string.utils';
import { PropsInterface } from './interfaces/component.interface';

import './style/style.scss';

class Avatar extends React.Component<PropsInterface> {
    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        className: PropTypes.string,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    };

    static defaultProps = {
        className: ''
    };

    get defaultAttribute() {
        const { className, size, ...res } = this.props;

        return {
            ...res,
            className: this.getClassNameImage(className)
        };
    }

    get className(): string {
        const { size } = this.props;

        return convert_obj_to_string({
            'ui-atomic-avatar': true,
            [`ui-atomic-avatar--size-${size}`]:
                size === 'small' || size === 'big' || size === 'default'
        });
    }

    get style() {
        const { size } = this.props;

        if (size !== 'small' && size !== 'big' && size !== 'default') {
            return {
                width: `${size}px`,
                height: `${size}px`
            };
        }

        return {};
    }

    getClassNameImage(className?: string): string {
        return convert_obj_to_string({
            [`${className}`]: true
        });
    }

    render(): React.ReactNode {
        const { defaultAttribute, className, style } = this;

        return (
            <div className={className} style={style}>
                <ImageComponent {...defaultAttribute} />
            </div>
        );
    }
}

export default Avatar;
