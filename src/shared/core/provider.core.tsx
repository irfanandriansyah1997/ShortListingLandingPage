/**
 * Provider Core
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';

abstract class ProviderCore extends React.Component {
    protected vm = null;

    protected ctrl = null;

    setViewModel(model: any) {
        this.vm = model;
    }

    get viewModel(): any {
        return this.vm;
    }

    setController(controller: any) {
        this.ctrl = controller;
    }

    get controller(): any {
        return this.ctrl;
    }

    abstract render(): React.ReactNode;
}

export default ProviderCore;
