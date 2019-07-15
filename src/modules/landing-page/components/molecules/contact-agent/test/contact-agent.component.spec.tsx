/**
 * Contact Agent Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

/* eslint-disable */

import * as React from 'react';
import { mount } from 'enzyme';
import ContactAgent from '../contact-agent.component';
import { PropsInterface } from '@/modules/landing-page/components/molecules/contact-agent/interfaces/component.interfaces';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        name: 'Ramadhan Januar',
        photo: 'image1'
    },
    {
        name: 'Febri',
        photo: 'image2'
    }
];

describe('Testing contact agent component in molecules component ', () => {
    it('Test render contact agent component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const card = mount(<ContactAgent {...item} />);

            expect(card.find('Text[name="ui-molecules-shortlist__id ml-8"]').text()).toBe(
                item.name
            );
            expect(card.find('Avatar').prop('src')).toBe(item.photo);
            expect(card.find('Avatar').prop('alt')).toBe(item.name);

            return true;
        });
    });
});
