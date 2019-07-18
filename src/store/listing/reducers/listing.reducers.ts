/**
 * Listing Store Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { ReducerInterface } from '@/shared/interfaces/store.interface';
import { DefaultListingModel } from '@/store/listing/model/listing.model';
import { ListingListInterface, ListingInterface } from '@/store/listing/interfaces/listing.interface';

export const SET_LISTING = 'SET_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const SET_ACTIVE_LISTING = 'SET_ACTIVE_LISTING';

const getActivePosition = (listing: ListingInterface[], id: string | number) => {
    const activeListing = listing
        .map((item: ListingInterface, index: number): any => ({
            ...item,
            index
        }))
        .filter((item: any) => item.id === id);

    if (activeListing.length > 0) {
        return activeListing[0].index;
    }

    return 0;
};

const Reducers = (
    state: ListingListInterface = DefaultListingModel,
    action: ReducerInterface
): ListingListInterface => {
    switch (action.type) {
    case SET_LISTING:
        return {
            ...state,
            count: action.payload.param.length,
            properties: action.payload.param
        };
    case SET_ACTIVE_LISTING:
        return {
            ...state,
            selected: getActivePosition(state.properties, action.payload.param)
        };
    case REMOVE_LISTING:
        return {
            ...state,
            properties: state.properties.filter((item: ListingInterface) => item.id !== action.payload.param),
            selected: 0
        };
    default:
        return state;
    }
};

export default Reducers;
