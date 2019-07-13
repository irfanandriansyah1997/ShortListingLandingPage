/**
 * Icon Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.05.30
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsLinkInterface } from '@/shared/interfaces/component.interface';
import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

import './style/style.scss';

export interface IconProps extends DefaultPropsLinkInterface {
    color?: string;
    size?: string | number;
}

class Icon extends React.Component<IconProps> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        color: PropTypes.string,
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['default', 'small', 'big'])]),
        onClick: PropTypes.func
    };

    static defaultProps = {
        color: null,
        size: 'default',
        onClick: (): void => {}
    };

    get style(): DefaultDynamicObject {
        const { color, size } = this.props;
        const response: DefaultDynamicObject = {
            color
        };

        if (typeof size === 'number') {
            response.fontSize = `${size}px`;
        }

        return response;
    }

    get className(): string {
        const { size } = this.props;
        const response: DefaultDynamicObject = {
            'ui-atomic-icon': true,
            'material-icons': true
        };

        if (typeof size === 'string') {
            response[`ui-atomic-icon--${size}`] = true;
        }

        return Object.keys(response)
            .filter((item) => response[item])
            .map((item) => item)
            .join(' ');
    }

    render(): React.ReactNode {
        const { children, onClick } = this.props;

        return (
            <i
                className={this.className}
                style={this.style}
                onClick={onClick}
                onKeyDown={onClick}
                role="button"
                tabIndex={0}
            >
                {children}
            </i>
        );
    }
}

export default Icon;
