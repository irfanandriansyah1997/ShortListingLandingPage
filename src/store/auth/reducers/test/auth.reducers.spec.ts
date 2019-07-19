/**
 * Test Auth Reducers
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.13
 */

import Reducers, { SET_LOGIN, SET_LOGOUT } from '@/store/auth/reducers/auth.reducers';
import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';
import { DefaultAuthModel } from '@/store/auth/model/auth.model';

const param: AuthModelInterface = {
    email: 'test@99.co',
    password: 'rahasia',
    photo_profile: '',
    username: 'testing'
};

describe('Testing reducers for auth store', () => {
    it('Invoke function set login', () => {
        expect(Reducers(DefaultAuthModel, { type: SET_LOGIN, payload: param })).toStrictEqual({
            ...param,
            isLogin: true
        });
    });

    it('Invoke function set logout', () => {
        expect(Reducers(param, { type: SET_LOGOUT, payload: {} })).toStrictEqual(DefaultAuthModel);
    });

    it('Invoke function set unknown action type', () => {
        expect(Reducers(param, { type: 'testing unknown action', payload: {} })).toStrictEqual(
            param
        );
    });
});
