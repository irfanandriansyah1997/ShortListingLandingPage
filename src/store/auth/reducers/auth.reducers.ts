import { AuthModelInterface } from '@/store/auth/interfaces/auth.interface';
import { ReducerInterface } from '@/shared/interfaces/store.interface';
import { DefaultAuthModel } from '@/store/auth/model/auth.model';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

const Reducers = (
    state: AuthModelInterface = DefaultAuthModel,
    action: ReducerInterface
): AuthModelInterface => {
    switch (action.type) {
    case SET_LOGIN:
        return {
            ...state,
            ...action.payload,
            isLogin: true
        };
    case SET_LOGOUT:
        return {
            ...DefaultAuthModel
        };
    default:
        return state;
    }
};

export default Reducers;
