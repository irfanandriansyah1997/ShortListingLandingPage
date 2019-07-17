/**
 * Auth Model Mock Example
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';

export const DefaultAuthModel: AuthModelInterface = {
    email: '',
    password: '',
    username: '',
    photo_profile: '',
    isLogin: false
};
