/**
 * Landing Page View Model Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { ComposedComponentProps } from '@/shared/interfaces/viewmodel.interface';
import { ListingListInterface } from '@/store/listing/interfaces/listing.interface';

export interface StateProps {
    landingPageModel: {
        model: ListingListInterface;
    };
}

export type Props = ComposedComponentProps & StateProps;
