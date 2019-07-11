import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';

import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import './style.scss';

class TextComponent extends Component<DefaultPropsInterface> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    };

    render() {
        const { children } = this.props;
        return <p className="ui-text">{children}</p>;
    }
}

export default TextComponent;
