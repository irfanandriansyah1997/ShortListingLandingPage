/**
 * Icon Component
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.09
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { convert_obj_to_string } from '@/shared/utils/string.utils';
import { PropsInterface } from './interfaces/component.interface';

import './style/style.scss';

class Text extends React.Component<PropsInterface> {
    static propTypes = {
        styling: PropTypes.oneOf(['heading', 'subheading', 'text', 'caption']),
        tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']).isRequired,
        fontWeight: PropTypes.oneOf([300, 400, 500, 600, 700]).isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        align: PropTypes.oneOf(['center', 'left', 'right', 'initial']),
        name: PropTypes.string
    };

    static defaultProps = {
        styling: 'text',
        align: 'initial',
        name: ''
    };

    get className(): string {
        const {
            styling, fontWeight, align, name
        } = this.props;
        const FONT_WEIGHT = {
            300: 'light',
            400: 'normal',
            500: 'medium',
            600: 'semibold',
            700: 'bold'
        };

        return convert_obj_to_string({
            [`${name}`]: true,
            'ui-atomic-text': true,
            [`ui-atomic-text--style-${styling}`]: true,
            [`ui-atomic-text--font-weight-${FONT_WEIGHT[fontWeight]}`]: true,
            [`ui-atomic-text--align-${align}`]: true
        });
    }

    render(): React.ReactNode {
        const { children, tag } = this.props;
        const { className } = this;

        return React.createElement(tag, { className }, children);
    }
}

export default Text;
