import * as React from 'react';
import ViewModel from './view-model';
import Controller from './controller';

class LandingPageModule extends React.Component {
    render() {
        const Module = ViewModel(Controller);
        return <Module />;
    }
}

export default LandingPageModule;
