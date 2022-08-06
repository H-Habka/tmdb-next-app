import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import generalSlice from "./features/generalSlice";

const rootReducer = combineReducers({
    generalSlice
});


export const store = () =>  configureStore({ reducer: rootReducer });


export const wrapper = createWrapper(store)
