/**
 * Listing Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.16
 */

import TranslatorCore from '@/shared/core/translator.core';
import { ListingInterface } from '@/store/listing/interfaces/listing.interface';
import { DefaultDynamicObject } from '@/shared/interfaces/object.interface';

class ListingTranslator extends TranslatorCore {
    private listing: ListingInterface;

    constructor(listing: ListingInterface, type: string) {
        super(type);
        this.listing = listing;
    }

    get attribute() {
        const { listing } = this;
        return { listing };
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
