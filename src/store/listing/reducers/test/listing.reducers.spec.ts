/**
 * Test Listing Reducers
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

/* eslint-disable */

import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { CertificationType } from '@/store/listing/interfaces/listing/listing_model.interface';
import {
    ListingTypeEnum,
    PropertyTypeEnum
} from '@/store/listing/interfaces/listing/listing_type.interface';
import Reducers, { SET_LISTING } from '@/store/listing/reducers/listing.reducers';

require('config/enzyme.config');

const param: ListingInterface[] = [
    {
        id: '#123abce',
        title: 'Dijual Rumah Nusaloka di BSD Tangerang Selatan',
        location: 'BSD, Tangerang Selatan, Jakarta Barat',
        description: 'Testing Description',
        attribute: {
            bedrooms: 3,
            bathrooms: 2,
            buildingSize: 217,
            landSize: 142,
            floors: 2,
            price: 700000000,
            priceTag: 'Rp. 700 Juta',
            certification: CertificationType.HAK_MILIK,
            carports: 1,
            garages: 1
        },
        formattedAttributes: [],
        listingType: ListingTypeEnum.FOR_SALE,
        mainPicture:
            'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553127.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
        pictures: [
            {
                caption: 'Testing Picture',
                url:
                    'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553127.V800/Manyar-Jaya-Surabaya-Indonesia.jpg'
            },
            {
                url:
                    'https://id1-cdn.pgimgs.com/listing/16497579/UPHO.90553128.V800/Manyar-Jaya-Surabaya-Indonesia.jpg'
            },
            {
                url:
                    'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553129.V800/Manyar-Jaya-Surabaya-Indonesia.jpg'
            },
            {
                url:
                    'https://id1-cdn.pgimgs.com/listing/16497579/UPHO.90553130.V800/Manyar-Jaya-Surabaya-Indonesia.jpg'
            },
            {
                url:
                    'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553131.V800/Manyar-Jaya-Surabaya-Indonesia.jpg'
            }
        ],
        propertyType: PropertyTypeEnum.HOUSE
    }
];

describe('Testing reducers for listing store', () => {
    it('Invoke function set listing', () => {
        expect(
            Reducers(
                {
                    count: 0,
                    properties: [],
                    selected: 0
                },
                {
                    type: SET_LISTING,
                    payload: {
                        param
                    }
                }
            )
        ).toStrictEqual({
            count: 1,
            properties: param,
            selected: 0
        });
    });
});
