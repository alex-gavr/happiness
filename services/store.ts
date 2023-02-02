import { configureStore } from "@reduxjs/toolkit";
import globalStateReducer from './globalStateSlice';


export const store = configureStore({
    reducer:{
        globalState: globalStateReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;