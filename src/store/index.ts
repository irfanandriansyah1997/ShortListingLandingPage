/**
 * Redux Store Setup
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

/* eslint-disable */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import AuthReducer from './auth/reducers/auth.reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig: PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['AuthReducer']
};

export default (initialState: any = {}) => {
    const reducers = combineReducers({
        AuthReducer
    });
    const persistReducers = persistReducer(persistConfig, reducers);

    const store = createStore(
        persistReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);

    return {
        store,
        persistor
    };
};
