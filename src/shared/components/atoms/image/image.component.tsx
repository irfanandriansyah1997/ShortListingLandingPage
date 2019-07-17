/**
 * Image Component
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.09
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { convert_obj_to_string } from '@/shared/utils/string.utils';
import { PropsInterface } from './interfaces/component.interface';

import './style/style.scss';

class Image extends React.Component<PropsInterface> {
    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        className: '',
        onClick: () => {}
    };

    get className(): string {
        const { className } = this.props;

        return convert_obj_to_string({
            [`${className}`]: true,
            'ui-atomic-image': true
        });
    }

    render(): React.ReactNode {
        const { alt, src, onClick } = this.props;
        const { className } = this;

        return (
            <img className={className} alt={alt} src={src} onClick={onClick} onKeyDown={onClick} role="presentation" />
        );
    }
}

export default Image;
