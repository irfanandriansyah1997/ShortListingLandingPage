/**
 * Listing Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.16
 */

import TranslatorCore from '@/shared/core/translator.core';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';
import { AttributeListingTranslatorInterface } from '../interfaces/translator/translator.interface';
import { FormattedAttribute } from '../interfaces/listing/listing_model.interface';

class ListingTranslator extends TranslatorCore {
    private listing: ListingInterface;

    constructor(listing: ListingInterface, type: string) {
        super(type);
        this.listing = listing;
    }

    get attribute(): AttributeListingTranslatorInterface[] {
        const { listing } = this;
        const { formattedAttributes } = listing;
        const response: AttributeListingTranslatorInterface[] = [
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/bed.svg',
                name: 'bedrooms',
                value: ''
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/bath.svg',
                name: 'bathrooms',
                value: ''
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/home.svg',
                name: 'buildingSize',
                value: ''
            },
            {
                icon: 'https://public.urbanindo.com/short-listing-landing-page/land.svg',
                name: 'landSize',
                value: ''
            }
        ];

        return response.map((item: AttributeListingTranslatorInterface) => {
            const list = formattedAttributes.filter((attribute: FormattedAttribute) => attribute.name === item.name);

            return {
                ...item,
                value: list.length > 0 ? list[0].value : '-'
            };
        });
    }

    public translate() {
        return this.getMappingTranslator();
    }

    public getMappingTranslator(): any {
        const { type_translator } = this;
        const module: DefaultDynamicObject = {
            attribute: this.attribute
        };

        return module[type_translator];
    }
}

export default ListingTranslator;
