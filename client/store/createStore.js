import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// import authReducer from "./auth/authReducer"

import xAuthTokenReducer from './auth/authState';
import userReducer from './auth/user';

export default (preloadedState = null) => {

    const storeConfigs = {
        reducer: combineReducers({
            state: xAuthTokenReducer,
            user: userReducer
        })
    }
    if (preloadedState) storeConfigs.preloadedState = preloadedState;
    return configureStore(storeConfigs);
}