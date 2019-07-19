/**
 * Test Listing Translator
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.19
 */

import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { DefaultListingModel } from '@/store/listing/model/listing.model';
import ListingTranslator from '@/store/listing/translator/listing.translator';

const param: ListingInterface = DefaultListingModel.properties[0];

describe('Testing translator for listing store', () => {
    it('Invoke function get attribute', () => {
        const translator = new ListingTranslator(param, 'attribute');
        const actual_response = [
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/bed.svg',
                name: 'bedrooms',
                value: '2 Kamar Mandi'
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/bath.svg',
                name: 'bathrooms',
                value: '3 Kamar Tidur'
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/home.svg',
                name: 'buildingSize',
                value: '217 m<sup>2</sup>'
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/land.svg',
                name: 'landSize',
                value: '142 m<sup>2</sup>'
            }
        ];

        expect(translator.translate()).toStrictEqual(actual_response);
    });

    it('Invoke function get attribute with null value', () => {
        const mock_param: ListingInterface = {
            ...param,
            formattedAttributes: []
        };

        const translator = new ListingTranslator(mock_param, 'attribute');
        const actual_response = [
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/bed.svg',
                name: 'bedrooms',
                value: '-'
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/bath.svg',
                name: 'bathrooms',
                value: '-'
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/home.svg',
                name: 'buildingSize',
                value: '-'
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/land.svg',
                name: 'landSize',
                value: '-'
            }
        ];

        expect(translator.translate()).toStrictEqual(actual_response);
    });
});
