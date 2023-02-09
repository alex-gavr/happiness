import { IGlobalState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IGlobalState = {
    questionNumber: 0,
    exit: {
        betting: 0,
        utilities: 0,
        other: 0,
    },
};

export const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        incrementExit: (state, action) => {
            if (action.payload === 'betting') {
                state.exit.betting = state.exit.betting + 1;
            } else if (action.payload === 'utilities') {
                state.exit.utilities = state.exit.utilities + 1;
            } else if (action.payload === 'other') {
                state.exit.other = state.exit.other + 1;
            }
        },
        incrementQuestionNumber: (state) => {
            state.questionNumber = state.questionNumber + 1;
        }
    },
});

export const { incrementExit, incrementQuestionNumber } = globalStateSlice.actions;
export default globalStateSlice.reducer;
