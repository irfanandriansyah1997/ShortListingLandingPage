/**
 * Listing Model Mock Example
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

/* eslint-disable */

import { ListingListInterface } from '@/store/listing/interfaces/listing.interface';
import { CertificationType } from '@/store/listing/interfaces/listing/listing_model.interface';
import {
    ListingTypeEnum,
    PropertyTypeEnum
} from '@/store/listing/interfaces/listing/listing_type.interface';

export const DefaultListingModel: ListingListInterface = {
    count: 2,
    properties: [
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
    ],
    selected: 0
};
