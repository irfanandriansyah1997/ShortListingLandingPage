/**
 * Listing Model Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.13
 */

import { AgentInterface } from '@/store/listing/interfaces/agent/agent.interface';
import { PropertyTypeEnum, ListingTypeEnum } from '@/store/listing/interfaces/listing/listing_type.interface';
import {
    ListingAttributeInterface,
    FormattedAttribute
} from '@/store/listing/interfaces/listing/listing_model.interface';
import { PictureInterface } from '@/store/listing/interfaces/picture/picture.interface';

export interface ListingInterface {
    id: number | string;
    title: string;
    location: string;
    description: string;
    attribute: ListingAttributeInterface;
    formattedAttributes: FormattedAttribute[];
    listingType: ListingTypeEnum;
    mainPicture: string;
    link: string;
    pictures: PictureInterface[];
    propertyType: PropertyTypeEnum;
    agent: AgentInterface;
    hide: boolean;
}

export interface ListingListInterface {
    count: number;
    properties: ListingInterface[];
    selected: number;
}

export interface ListingActionInterface {
    activeListing: (listingID: number | string) => void;
    removeListing: (listingID: number | string) => void;
}
