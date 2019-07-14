/**
 * Provider Core
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';

abstract class ProviderCore extends React.Component {
    protected vm = null;

    protected ctrl = null;

    set ViewModel(model: any) {
        this.vm = model;
    }

    get ViewModel(): any {
        return this.vm;
    }

    set Controller(controller: any) {
        this.ctrl = controller;
    }

    get Controller(): any {
        return this.ctrl;
    }

    get Module(): any {
        const { ViewModel, Controller } = this;

        return ViewModel(Controller);
    }

    abstract render(): React.ReactNode;
}

export default ProviderCore;
