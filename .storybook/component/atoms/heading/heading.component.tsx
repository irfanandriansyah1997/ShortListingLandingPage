import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';

import { DefaultPropsInterface, DefaultDynamicObject } from '@/interfaces/object.interface';
import './style.scss';

interface props extends DefaultPropsInterface {
    parent?: boolean;
}

class HeadingComponent extends Component<props> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        parent: PropTypes.bool
    };

    static defaultProps = {
        parent: false
    };

    get className() {
        const { parent } = this.props;

        const className: DefaultDynamicObject = {
            'ui-heading': true,
            'ui-heading--parent': parent
        };

        return Object.keys(className)
            .filter((item: string) => className[item])
            .join(' ');
    }

    render() {
        const { children } = this.props;
        return <h1 className={this.className}>{children}</h1>;
    }
}

export default HeadingComponent;
