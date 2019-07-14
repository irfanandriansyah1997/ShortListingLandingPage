/**
 * Landing Page View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Core, {
    propTypes as defaultPropTypes,
    defaultProps as defaultPropsTypes
} from '@/shared/core/viewmodel.core';
import { StoreInterface } from '@/store/interfaces/store.interface';
import { Props, StateProps } from '@/modules/landing-page/interfaces/viewmodel.interface';

export const propTypes = {
    landingPageModel: PropTypes.shape({
        model: PropTypes.shape({
            count: PropTypes.number,
            properties: PropTypes.arrayOf(PropTypes.shape({}))
        })
    }).isRequired,
    authModel: PropTypes.shape(defaultPropTypes)
};

export const defaultProps = {
    authModel: defaultPropsTypes
};

const mapStateToProps = (state: StoreInterface): StateProps => ({
    landingPageModel: {
        model: state.ListingReducer
    }
});

const ViewModel = (ComposedComponent: React.ComponentClass<Props>) => {
    class ViewModelComponent extends React.Component<Props> {
        static propTypes = propTypes;

        static defaultProps = defaultProps;

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    return Core(
        connect(
            mapStateToProps,
            null
        )(
            // @ts-ignore
            ViewModelComponent
        )
    );
};

export default ViewModel;
