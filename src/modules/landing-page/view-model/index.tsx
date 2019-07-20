/**
 * Landing Page View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Props, defaultPropsType } from '@/modules/landing-page/interfaces/viewmodel.interface';
import Core, { propTypes as defaultPropTypes, defaultProps as defaultPropsTypes } from '@/shared/core/viewmodel.core';
import { StoreInterface } from '@/store/interfaces/store.interface';
import {
    ListingListInterface,
    ListingActionInterface,
    ListingInterface
} from '@/store/listing/interfaces/listing.interface';
import { setActiveAction, removeListingAction } from '@/store/listing/action/listing.action';

export const defaultStatePropTypes = {
    count: PropTypes.number,
    properties: PropTypes.arrayOf(PropTypes.shape({})),
    selected: PropTypes.number
};

export const defaultDispatchPropTypes = {
    activeListing: PropTypes.func,
    removeListing: PropTypes.func
};

export const defaultAuthPropTypes = {
    authModel: PropTypes.shape(defaultPropTypes)
};

export const propTypes = {
    landingPageModel: PropTypes.shape({
        model: PropTypes.shape(defaultStatePropTypes),
        action: PropTypes.shape(defaultDispatchPropTypes)
    }).isRequired,
    ...defaultAuthPropTypes
};

export const defaultProps = {
    authModel: defaultPropsTypes
};

const mapStateToProps = (state: StoreInterface): ListingListInterface => ({
    ...state.ListingReducer
});

const mapDispatchToProps = (dispatch: any): ListingActionInterface => ({
    activeListing: (listingID: number | string) => dispatch(setActiveAction(listingID)),
    removeListing: (listingID: number | string) => dispatch(removeListingAction(listingID))
});

const ViewModel = (ComposedComponent: React.ComponentClass<Props>) => {
    class ViewModelComponent extends React.Component<defaultPropsType> {
        static propTypes = {
            ...defaultDispatchPropTypes,
            ...defaultStatePropTypes,
            ...defaultAuthPropTypes
        };

        static defaultProps = defaultProps;

        get properties(): ListingInterface[] {
            const { properties, authModel } = this.props;

            return properties.filter((item: ListingInterface) => {
                if (authModel.model.isLogin) {
                    return true;
                }

                return !item.hide;
            });
        }

        get store(): Props {
            const {
                activeListing, removeListing, count, selected, ...temp
            } = this.props;
            const { properties } = this;

            return {
                landingPageModel: {
                    action: {
                        activeListing,
                        removeListing
                    },
                    model: {
                        count,
                        properties,
                        selected
                    }
                },
                ...temp
            };
        }

        render() {
            const { store } = this;
            return <ComposedComponent {...store} />;
        }
    }

    return Core(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(
            // @ts-ignore
            ViewModelComponent
        )
    );
};

export default ViewModel;
