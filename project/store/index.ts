import { createWrapper } from "next-redux-wrapper";
import { configureStore, PayloadAction, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";

import { stateWithStatus } from "@/core/util.ts";

import quizSlice from "@/store/quiz.ts";
import counterSlice from "@/store/counter.ts";

// const rootReducer = combineReducers({});
// export type RootState = ReturnType<typeof rootReducer>

interface StateStatus {
    isLoading: boolean;
    isDone: boolean;
    isFailure: boolean;
    error: null | string;
}

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        quiz: quizSlice.reducer,
    },
    devTools: process.env.NODE_ENV === "development",
});

const wrapper = createWrapper(() => store);

console.log(counterSlice.actions.increase)
export default wrapper;
