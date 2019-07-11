/**
 * Icon Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Icon, { IconProps } from '../icon.component';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';
import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

const defaultIcon: Array<IconProps> = [
    {
        children: 'edit',
        size: 'default'
    },
    {
        children: 'account_circle',
        size: 'default'
    },
    {
        children: 'delete_forever',
        size: 'default'
    },
    {
        children: 'g_translate',
        size: 'default'
    },
    {
        children: 'theaters',
        size: 'default'
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    template(children?: string | React.ReactNode, color?: string, size?: string | number): any;
}

class ButtonStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            component: {
                default: defaultIcon,
                color: defaultIcon.map((item) => ({ ...item, color: '#69acec' })),
                small: defaultIcon.map((item) => ({ ...item, size: 'small' })),
                big: defaultIcon.map((item) => ({ ...item, size: 'big' })),
                customSize: defaultIcon.map((item) => ({ ...item, size: 50 }))
            },
            wording: `Icon komponen digunakan untuk memanggil icon pada material icon / urbanindo icon font`,
            template: (children, color, size) =>
                '<Icon' +
                '\n    color="' +
                color +
                '"' +
                '\n    size="' +
                size +
                '"' +
                '\n>' +
                '\n    ' +
                children +
                '\n' +
                '</Icon> \n',
            example: [
                {
                    key: 'small',
                    text: 'Icon small'
                },
                {
                    key: 'big',
                    text: 'Icon big'
                },
                {
                    key: 'color',
                    text: 'Icon with custom color'
                },
                {
                    key: 'customSize',
                    text: 'Button with custom size'
                }
            ]
        };
    }

    getCode(key: string) {
        const { component, template } = this.state;
        return component[key]
            .map(({ children, color, size }: IconProps) => template(children, color, size))
            .join('\n');
    }

    render() {
        const { component, wording, example } = this.state;

        return (
            <Template componentName="Icon" description={wording}>
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Icon.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item: IconProps) => (
                        <Icon {...item}>{item.children}</Icon>
                    ))}
                </Coding>
                <hr></hr>
                <Heading parent>Contoh Component</Heading>
                {example.map((exampleItem: DefaultDynamicObject) => (
                    <React.Fragment>
                        <Heading>{exampleItem.text}</Heading>
                        <Text>Contoh penggunaan komponent {exampleItem.text}.</Text>
                        <Coding code={this.getCode(exampleItem.key)}>
                            {component[exampleItem.key].map((item: IconProps) => (
                                <Icon {...item}>{item.children}</Icon>
                            ))}
                        </Coding>
                    </React.Fragment>
                ))}
            </Template>
        );
    }
}

export default ButtonStorybook;
