/**
 * Listing Model Mock Example
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

/* eslint-disable */

import { ListingListInterface } from '@/store/listing/interfaces/listing.interface';

export const DefaultListingModel: ListingListInterface = {
    count: 1,
    properties: [
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
            title: 'Rumah dijual murah di bandung',
            agent: {
                id: 1,
                name: 'Bambang',
                picture: 'https://randomuser.me/api/portraits/men/94.jpg',
                contact: {
                    address: 'Padalarang, Bandung Barat',
                    telephone: '085721079753',
                    telephone2: '087718291947',
                    website: '-'
                }
            }
        }
    ]
};
