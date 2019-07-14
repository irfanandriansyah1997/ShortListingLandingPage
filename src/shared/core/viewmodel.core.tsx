import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AuthModelInterface, AuthStoreInterface } from '@/store/auth/interfaces/auth.interface';
import { setLogin, setLogout } from '@/store/auth/action/auth.action';
import { StoreInterface } from '@/store/interfaces/store.interface';

interface StateProps {
    auth: AuthModelInterface;
}

interface DispatchProps {
    login: (option: AuthModelInterface) => void;
    logout: () => void;
}

type Props = StateProps & DispatchProps;

const ViewModelCore = (ComposedComponent: any) => {
    const mapDispatchToProps = (dispatch: any): DispatchProps => ({
        login: (option: AuthModelInterface) => dispatch(setLogin(option)),
        logout: () => dispatch(setLogout())
    });

    const mapStateToProps = (state: StoreInterface): StateProps => ({
        auth: state.AuthReducer
    });

    class Component extends React.Component<Props> {
        static propTypes = {
            login: PropTypes.func.isRequired,
            logout: PropTypes.func.isRequired,
            auth: PropTypes.shape({
                username: PropTypes.string,
                email: PropTypes.string,
                password: PropTypes.string,
                photo_profile: PropTypes.string,
                isLogin: PropTypes.bool
            })
        };

        static defaultProps = {
            auth: {
                username: '',
                email: '',
                password: '',
                photo_profile: '',
                isLogin: false
            }
        };

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
            return <ComposedComponent />;
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
