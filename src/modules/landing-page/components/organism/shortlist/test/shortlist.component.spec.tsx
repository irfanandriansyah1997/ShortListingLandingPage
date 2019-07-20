/**
 * ShortList Test
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.15
 */

/* eslint-disable */

import * as React from 'react';
import { mount } from 'enzyme';
import ShortList from '@/modules/landing-page/components/organism/shortlist/shortlist.component';
import { PropsInterface } from '@/modules/landing-page/components/organism/shortlist/interfaces/component.interface';
import { DefaultListingModel } from '@/store/listing/model/listing.model';

require('config/enzyme.config');

const FIXTURE: PropsInterface[] = [
    {
        listing: { ...DefaultListingModel.properties[0], hide: true }
    },
    {
        listing: { ...DefaultListingModel.properties[0], hide: false }
    }
];

describe('Testing shortlisting detail component in molecules component ', () => {
    it('Test render shortlisting detail component', () => {
        FIXTURE.map((item: PropsInterface) => {
            const component = mount(<ShortList {...item} />);

            if (item.listing.hide) {
                expect(component.find('Alert').exists()).toBeTruthy();
            } else {
                expect(component.find('Alert').exists()).toBeFalsy();
            }
        });
    });
});
