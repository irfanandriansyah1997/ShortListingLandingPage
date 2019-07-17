/**
 * Landing Page View Model Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { ComposedComponentProps } from '@/shared/interfaces/viewmodel.interface';
import { ListingListInterface, ListingActionInterface } from '@/store/listing/interfaces/listing.interface';

export interface MergedProps {
    landingPageModel: {
        model: ListingListInterface;
        action: ListingActionInterface;
    };
}

export interface StateProps {
    model: ListingListInterface;
}

export interface DispatchProps {
    action: ListingActionInterface;
}

export type defaultPropsType = ComposedComponentProps & ListingListInterface & ListingActionInterface;
export type Props = ComposedComponentProps & MergedProps;
