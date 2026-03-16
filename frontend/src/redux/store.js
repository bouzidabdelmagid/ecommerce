import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import {persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './slices/productslice';
import userReducer from './slices/userslice';
const rootReducer = combineReducers({
product:productReducer,
user:userReducer,


})
const persistConfig ={key:"root",storage,version:1}
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({reducer:persistedReducer})
export const persistor = persistStore(store)
