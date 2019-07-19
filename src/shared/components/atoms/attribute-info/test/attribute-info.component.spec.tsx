/**
 * Attribute Info Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.19
 */

/* eslint-disable */

import * as React from 'react';
import { render, mount } from 'enzyme';
import AttributeInfo from '@/shared/components/atoms/attribute-info/attribute-info.component';
import { PropsInterface } from '@/shared/components/atoms/attribute-info/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        icon: 'close',
        name: 'name attribute',
        title: 'title attribute',
        value: 'value attribute'
    }
];

describe('Testing alert component in alert component ', () => {
    it('Test render alert component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const attributeInfoRender = render(<AttributeInfo {...item} />);
            const attributeInfoMount = mount(<AttributeInfo {...item} />);

            expect(attributeInfoRender.hasClass('ui-atomic-attribute-info')).toBe(true);
            expect(attributeInfoMount.find('Image').prop('src')).toBe(item.icon);
            expect(attributeInfoMount.find('Image').prop('alt')).toBe(item.title);
            expect(attributeInfoMount.find('span').text()).toBe(item.value);

            return true;
        });
    });
});
