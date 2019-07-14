/**
 * View Model Core
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AuthModelInterface, AuthStoreInterface } from '@/store/auth/interfaces/auth.interface';
import { setLogin, setLogout } from '@/store/auth/action/auth.action';
import { StoreInterface } from '@/store/interfaces/store.interface';
import {
    DispatchProps,
    StateProps,
    Props,
    ComposedComponentProps
} from '@/shared/interfaces/viewmodel.interface';
import { DefaultAuthModel } from '@/store/auth/model/auth.model';

export const propTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    auth: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        photo_profile: PropTypes.string,
        isLogin: PropTypes.bool
    })
};

export const defaultProps = {
    login: (_: AuthModelInterface) => {},
    logout: () => {},
    auth: DefaultAuthModel
};

const ViewModelCore = (ComposedComponent: React.ComponentClass<ComposedComponentProps & any>) => {
    const mapDispatchToProps = (dispatch: any): DispatchProps => ({
        login: (option: AuthModelInterface) => dispatch(setLogin(option)),
        logout: () => dispatch(setLogout())
    });

    const mapStateToProps = (state: StoreInterface): StateProps => ({
        auth: state.AuthReducer
    });

    class Component extends React.Component<Props> {
        static propTypes = propTypes;

        static defaultProps = defaultProps;

        get authStore(): AuthStoreInterface {
            const { login, logout, auth } = this.props;

            return {
                action: {
                    login,
                    logout
                },
                model: auth
            };
        }

        render() {
            const { authStore } = this;

            return <ComposedComponent authModel={authStore} />;
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        // @ts-ignore
        Component
    );
};

export default ViewModelCore;
