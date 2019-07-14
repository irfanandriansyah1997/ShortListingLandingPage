/**
 * Landing Page Controller Interfaces
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface ControllerProps extends DefaultPropsInterface {
    actionSetLogin: (option: AuthModelInterface) => void;
    actionSetLogout: () => void;
    authModel: AuthModelInterface;
}
