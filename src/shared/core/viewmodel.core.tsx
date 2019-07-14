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

export const propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    auth: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        photo_profile: PropTypes.string,
        isLogin: PropTypes.bool
    }).isRequired
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

        static defaultProps = {};

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
