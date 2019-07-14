/**
 * Landing Page Modules
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

import * as React from 'react';
import ViewModelLandingPage from './view-model';
import ControllerLandingPage from './controller';
import ProviderCore from '@/shared/core/provider.core';

class LandingPageModule extends ProviderCore {
    constructor(props: any) {
        super(props);

        this.Controller = ControllerLandingPage;
        this.ViewModel = ViewModelLandingPage;
    }

    render() {
        const { Module } = this;

        return <Module />;
    }
}

export default LandingPageModule;
