/**
 * Test Listing Action
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

/* eslint-disable */

import { setListing } from '@/store/listing/action/listing.action';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { SET_LISTING } from '@/store/listing/reducers/listing.reducers';

require('config/enzyme.config');

describe('Testing action for listing store', () => {
    it('Invoke function set login', () => {
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
            }
        ];

        expect(setListing(param)).toStrictEqual({
            type: SET_LISTING,
            payload: { param }
        });
    });
});
