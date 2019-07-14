/**
 * Controller Core
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import {
    AuthModelInterface,
    AuthActionInterface,
    AuthStoreInterface
} from '@/store/auth/interfaces/auth.interface';
import { DefaultAuthModel } from '@/store/auth/model/auth.model';

abstract class ControllerCore extends React.Component {
    protected authModel: AuthModelInterface = DefaultAuthModel;

    protected authAction: AuthActionInterface = {
        login: (_: AuthModelInterface) => {},
        logout: () => {}
    };

    setAuthAction(action: AuthActionInterface) {
        this.authAction = action;
    }

    setAuthModel(model: AuthModelInterface) {
        this.authModel = model;
    }

    get auth(): AuthStoreInterface {
        return {
            model: this.authModel,
            action: this.authAction
        };
    }

    actionLogin(user: AuthModelInterface): void {
        this.auth.action.login(user);
    }

    actionLogout(): void {
        this.auth.action.logout();
    }

    abstract render(): React.ReactNode;
}

export default ControllerCore;
