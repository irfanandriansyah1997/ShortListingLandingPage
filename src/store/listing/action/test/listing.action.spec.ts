/**
 * Test Listing Action
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

/* eslint-disable */

import { setListing, setActiveAction, removeListingAction } from '@/store/listing/action/listing.action';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { CertificationType } from '@/store/listing/interfaces/listing/listing_model.interface';
import { ListingTypeEnum, PropertyTypeEnum } from '@/store/listing/interfaces/listing/listing_type.interface';
import { SET_LISTING, SET_ACTIVE_LISTING, REMOVE_LISTING } from '@/store/listing/reducers/listing.reducers';

require('config/enzyme.config');

describe('Testing action for listing store', () => {
    it('Invoke function set login', () => {
        const param: ListingInterface[] = [
            {
                id: '#123abce',
                title: 'Dijual Rumah Nusaloka di BSD Tangerang Selatan',
                location: 'BSD, Tangerang Selatan, Jakarta Barat',
                hide: true,
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
                link:
                    'https://www.olx.co.id/iklan/rumah-dijual-murah-siap-huni-di-arcamanik-bandung-strategis-disko-dp-IDAd7W6.html?ad_type=OR#5e2fc97f72',
                mainPicture:
                    'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553127.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                pictures: [
                    {
                        caption: 'Testing Picture',
                        url:
                            'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553127.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                        id: 'ID-property-1'
                    },
                    {
                        url:
                            'https://id1-cdn.pgimgs.com/listing/16497579/UPHO.90553128.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                        id: 'ID-property-2'
                    },
                    {
                        url:
                            'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553129.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                        id: 'ID-property-3'
                    },
                    {
                        url:
                            'https://id1-cdn.pgimgs.com/listing/16497579/UPHO.90553130.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                        id: 'ID-property-4'
                    },
                    {
                        url:
                            'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553131.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                        id: 'ID-property-5'
                    }
                ],
                propertyType: PropertyTypeEnum.HOUSE,
                agent: {
                    name: 'Jajang',
                    picture: 'images',
                    contact: {
                        address: 'Padalarang',
                        telephone: '085721079753'
                    }
                }
            }
        ];

        expect(setListing(param)).toStrictEqual({
            type: SET_LISTING,
            payload: { param }
        });

        expect(setActiveAction('#123abce')).toStrictEqual({
            type: SET_ACTIVE_LISTING,
            payload: { param: '#123abce' }
        });

        expect(removeListingAction('#123abce')).toStrictEqual({
            type: REMOVE_LISTING,
            payload: { param: '#123abce' }
        });
    });
});
