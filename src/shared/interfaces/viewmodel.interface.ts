/**
 * View Model Core
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { AuthModelInterface, AuthStoreInterface } from '@/store/auth/interfaces/auth.interface';
import { DefaultPropsInterface } from './component.interface';

export interface StateProps {
    auth: AuthModelInterface;
}

export interface DispatchProps {
    login: (option: AuthModelInterface) => void;
    logout: () => void;
}

export type Props = StateProps & DispatchProps;

export interface ComposedComponentProps extends DefaultPropsInterface {
    authModel: AuthStoreInterface;
}
