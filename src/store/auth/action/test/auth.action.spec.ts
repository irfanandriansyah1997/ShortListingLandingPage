/**
 * Test Auth Action
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

import { setLogin, setLogout } from '@/store/auth/action/auth.action';
import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';
import { SET_LOGIN, SET_LOGOUT } from '@/store/auth/reducers/auth.reducers';

require('config/enzyme.config');

describe('Testing action for auth store', () => {
    it('Invoke function set login', () => {
        const param: AuthModelInterface = {
            email: 'test@99.co',
            isLogin: true,
            password: 'rahasia',
            photo_profile: '',
            username: 'testing'
        };

        expect(setLogin(param)).toStrictEqual({
            type: SET_LOGIN,
            payload: param
        });
    });

    it('Invoke function set logout', () => {
        expect(setLogout()).toStrictEqual({
            type: SET_LOGOUT
        });
    });
});
