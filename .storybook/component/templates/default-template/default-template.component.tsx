import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';

import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import './style.scss';

interface props extends DefaultPropsInterface {
    componentName: string;
    description: string;
}

class DefaultTemplateComponent extends Component<props> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        componentName: PropTypes.string.isRequired
    };

    render() {
        const { children, componentName, description } = this.props;
        return (
            <div className="ui ui-default">
                <div className="ui-default__heading">
                    <div className="ui-default__heading__logo">
                        <img src="https://i.ibb.co/60tV5Ts/doc.png" alt="image documentation" />
                    </div>
                    <div className="ui-default__heading__text">
                        <h1>Dokumentasi Komponen</h1>
                        <p>Berikut adalah penjelasan dokumentasi komponen {componentName}</p>
                    </div>
                </div>
                <div className="ui-default__content">
                    <div className="ui-default__content__heading">
                        <Heading parent>{componentName} Komponen</Heading>
                        <Text>{description}</Text>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}

export default DefaultTemplateComponent;
