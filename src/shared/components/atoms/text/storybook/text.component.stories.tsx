/**
 * Text Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.11
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import TextComponent from '../text.component';
import { PropsInterface } from '../interfaces/component.interface';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

const defaultText: Array<PropsInterface> = [
    {
        styling: 'text',
        tag: 'p',
        fontWeight: 400,
        align: 'center'
    },
    {
        styling: 'caption',
        tag: 'h5',
        fontWeight: 400,
        align: 'center'
    },
    {
        styling: 'subheading',
        tag: 'h3',
        fontWeight: 400,
        align: 'center'
    },
    {
        styling: 'heading',
        tag: 'h1',
        fontWeight: 400,
        align: 'center'
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    template(styling: any, tag: any, fontWeight: any, align: any, children: any): any;
}

class ButtonStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            component: {
                default: defaultText
            },
            wording: `Text komponen digunakan untuk membuat text berupa heading, subheading atau caption`,
            template: (styling: any, tag: any, fontWeight: any, align: any, children: any) =>
                '<Text' +
                '\n    styling="' +
                styling +
                '"' +
                '\n    tag="' +
                tag +
                '"' +
                '\n    fontWeight="' +
                fontWeight +
                '"' +
                '\n    align="' +
                align +
                '"' +
                '\n>' +
                '\n    ' +
                children +
                '\n' +
                '</Icon> \n'
        };
    }

    getCode(key: string) {
        const { component, template } = this.state;
        return component[key]
            .map(({ styling, tag, fontWeight, align, children }: PropsInterface) =>
                template(styling, tag, fontWeight, align, children)
            )
            .join('\n');
    }

    render() {
        const { component, wording } = this.state;

        return (
            <Template componentName="Text" description={wording}>
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Text.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item: PropsInterface) => (
                        <TextComponent {...item}>Text Component</TextComponent>
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default ButtonStorybook;
