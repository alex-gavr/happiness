import { IGlobalState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IGlobalState = {
    isHappy: null,
};

export const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        setIsHappy: (state, action) => {
            state.isHappy = action.payload;
        }
    },
});

export const { setIsHappy } = globalStateSlice.actions;
export default globalStateSlice.reducer;
