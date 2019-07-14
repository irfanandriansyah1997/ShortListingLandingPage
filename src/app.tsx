import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import LandingPageModule from '@/modules/landing-page';

import '@/shared/styles/app.scss';

const { store, persistor } = configureStore();

interface DefaultPropsInterface {
    children?: React.ReactNode;
    as?: any;
}

class App extends React.Component<DefaultPropsInterface> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <LandingPageModule />
                </PersistGate>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
