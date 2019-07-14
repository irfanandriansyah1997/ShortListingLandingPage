import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface ControllerProps extends DefaultPropsInterface {
    actionSetLogin: (option: AuthModelInterface) => void;
    actionSetLogout: () => void;
    authModel: AuthModelInterface;
}
