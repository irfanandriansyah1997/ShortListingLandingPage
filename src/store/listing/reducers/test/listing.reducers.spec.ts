/**
 * Test Listing Reducers
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

/* eslint-disable */

import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import Reducers, { SET_LISTING } from '@/store/listing/reducers/listing.reducers';

require('config/enzyme.config');

const param: ListingInterface[] = [
    {
        description: 'test description',
        id: 1,
        listingType: 1,
        location: 'Bandung Jawa Barat',
        marketType: 1,
        picture:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        propertyType: 1,
        rentType: 1,
        status: 1,
        title: 'Rumah dijual murah di bandung'
    },
    {
        description: 'test description',
        id: 1,
        listingType: 1,
        location: 'Bandung Jawa Barat',
        marketType: 1,
        picture:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        propertyType: 1,
        rentType: 1,
        status: 1,
        title: 'Rumah dijual murah di bandung'
    }
];

describe('Testing reducers for listing store', () => {
    it('Invoke function set listing', () => {
        expect(
            Reducers(
                {
                    count: 0,
                    properties: []
                },
                {
                    type: SET_LISTING,
                    payload: {
                        param
                    }
                }
            )
        ).toStrictEqual({
            count: 2,
            properties: param
        });
    });
});
