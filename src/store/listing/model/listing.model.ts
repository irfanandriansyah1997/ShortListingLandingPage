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
            propertyType: PropertyTypeEnum.HOUSE,
            agent: {
                name: 'Co Con',
                picture: 'https://randomuser.me/api/portraits/men/9.jpg',
                contact: {
                    address: 'Rancaekek',
                    telephone: '085721079753'
                }
            }
        },
        {
            id: '#PGA68N',
            title: 'Dijual Kost-an Daerah Dago Bandung',
            location: 'Jl. Dago Pojok  Dago',
            description: 'Testing Description',
            attribute: {
                bedrooms: 6,
                bathrooms: 5,
                buildingSize: 100,
                landSize: 141,
                floors: 2,
                price: 1500000000,
                priceTag: 'Rp. 1.5 Milyar',
                certification: CertificationType.PPJB,
                carports: 2,
                garages: 1
            },
            formattedAttributes: [],
            listingType: ListingTypeEnum.FOR_SALE,
            mainPicture:
                'https://picture.urbanindo.com/listing/719589588/08/8700bae7/dijual-kost-an-daerah-dago-bandung/780/780.jpg',
            pictures: [
                {
                    caption: 'Testing Picture',
                    url:
                        'https://picture.urbanindo.com/listing/719589588/01/444fb4d6/dijual-kost-an-daerah-dago-bandung/780/780.jpg'
                },
                {
                    url:
                        'https://picture.urbanindo.com/listing/719589588/01/c5ed2484/dijual-kost-an-daerah-dago-bandung/780/780.jpg'
                },
                {
                    url:
                        'https://picture.urbanindo.com/listing/719589588/01/973ccfc3/dijual-kost-an-daerah-dago-bandung/780/780.jpg'
                },
                {
                    url:
                        'https://picture.urbanindo.com/listing/719589588/02/204fca96/dijual-kost-an-daerah-dago-bandung/620/412.jpg'
                }
            ],
            propertyType: PropertyTypeEnum.HOUSE,
            agent: {
                name: 'Andrew Thian',
                picture: 'https://randomuser.me/api/portraits/men/8.jpg',
                contact: {
                    address: 'Padalarang',
                    telephone: '085721079753'
                }
            }
        }
    ],
    selected: 0
};
