import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LandingPageModule from '@/modules/landing-page';

import '@/shared/styles/app.scss';

interface DefaultPropsInterface {
    children?: React.ReactNode;
    as?: any;
}

class App extends React.Component<DefaultPropsInterface> {
    render() {
        return <LandingPageModule />;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
