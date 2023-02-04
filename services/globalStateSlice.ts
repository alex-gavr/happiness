import { IGlobalState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IGlobalState = {
    exit: '',
};

export const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        setExit: (state, action) => {
            state.exit = action.payload;
        }
    },
});

export const { setExit } = globalStateSlice.actions;
export default globalStateSlice.reducer;
