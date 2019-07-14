/**
 * Auth Store Action
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import { SET_LOGIN, SET_LOGOUT } from '@/store/auth/reducers/auth.reducers';
import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';

export const setLogin = (param: AuthModelInterface) => ({
    type: SET_LOGIN,
    payload: {
        ...param
    }
});

export const setLogout = () => ({
    type: SET_LOGOUT
});
