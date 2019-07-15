/**
 * Card Listing Component Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.11
 */

import * as React from 'react';
import { mount } from 'enzyme';
import CardListing from '@/shared/components/molecules/card-listing/card-listing.component';
import { PropsInterface } from '@/shared/components/molecules/card-listing/interfaces/component.interface';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        id: '#123456',
        location: 'Padalarang',
        price: 'Rp. 750 Juta',
        src: 'image',
        title: 'Rumah Dijual'
    }
];

describe('Testing card listing component in molecules component ', () => {
    it('Test render text component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const card = mount(<CardListing {...item} />);

            expect(card.find('Text[name="ui-molecules-card-listing__id mb-8"]').text()).toBe(
                item.id
            );
            expect(card.find('Text[name="ui-molecules-card-listing__price mb-8"]').text()).toBe(
                item.price
            );
            expect(card.find('Text[name="ui-molecules-card-listing__title mb-4"]').text()).toBe(
                item.title
            );
            expect(card.find('Text[name="ui-molecules-card-listing__location"]').text()).toBe(
                item.location
            );

            return true;
        });
    });
});
