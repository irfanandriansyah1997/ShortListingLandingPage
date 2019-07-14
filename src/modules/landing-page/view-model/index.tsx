import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Core, { propTypes as defaultPropTypes } from '@/shared/core/viewmodel.core';
import { StoreInterface } from '@/store/interfaces/store.interface';
import { Props, StateProps } from '@/modules/landing-page/interfaces/viewmodel.interface';

export const propTypes = {
    landingPageModel: PropTypes.shape({
        isLogin: PropTypes.bool.isRequired
    }).isRequired,
    authModel: PropTypes.shape(defaultPropTypes).isRequired
};

const mapStateToProps = (state: StoreInterface): StateProps => ({
    landingPageModel: {
        isLogin: state.AuthReducer.isLogin
    }
});

const ViewModel = (ComposedComponent: React.ComponentClass<Props>) => {
    class Component extends React.Component<Props> {
        static propTypes = propTypes;

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
            Component
        )
    );
};

export default ViewModel;
