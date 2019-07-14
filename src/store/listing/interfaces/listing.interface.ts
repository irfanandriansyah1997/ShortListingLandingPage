/**
 * Listing Model Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.13
 */

import { AgentInterface } from '@/store/listing/interfaces/agent.interface';

export interface ListingInterface {
    agent?: AgentInterface;
    attribute?: ListingAttributeInterface;
    description: string;
    id: number;
    listingType: number;
    location: string;
    marketType: number;
    picture: string;
    propertyType: number;
    rentType: number;
    status: number;
    title: string;
}

export interface ListingAttributeInterface {
    bathrooms: number;
    bedrooms: number;
    buildingSize: number;
    carports: number;
    certification: number;
    floors: number;
    garages: number;
    landSize: number;
    maidBathrooms: number;
    maidBedrooms: number;
    price: number;
}

export interface ListingList {
    count: number;
    properties: ListingInterface[];
}
