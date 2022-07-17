import { createWrapper } from "next-redux-wrapper";
import { createSlice, configureStore, PayloadAction, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";

import { API_getQuiz } from "@/api/index.ts";

const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>

export const getQuizList = createAsyncThunk("quiz/fetch", async (data, { rejectWithValue }) => {
    try {
        const response = await API_getQuiz();
        return response.data.results;
    } catch (err) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue(err.response.data);
    }
});

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 50,
    },
    reducers: {
        up: (counter, action) => {
            counter.value += action.payload || 0;
        },
    },
});

interface StateStatus {
    isLoading: boolean;
    isDone: boolean;
    isFailure: boolean;
    error: null | string;
}

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        quizList: [],
        quizList_status: {
            isLoading: false,
            isDone: false,
            isFailure: false,
            error: null,
        },
    },
    reducers: {
    },
    extraReducers: (builder) => {
        // builder.addCase(build)
        builder.addCase(getQuizList.pending, (state, action) => {
            state.quizList_status = {
                isLoading: true,
                isDone: false,
                isFailure: false,
                error: null,
            };
        });
        builder.addCase(getQuizList.fulfilled, (state, action) => {
            state.quizList = action.payload;
            state.quizList_status = {
                isLoading: false,
                isDone: true,
                isFailure: false,
                error: null,
            };
        });
        builder.addCase(getQuizList.rejected, (state, action) => {
            state.quizList_status = {
                isLoading: false,
                isDone: false,
                isFailure: true,
                error: action.error.message,
            };
        });
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        quiz: quizSlice.reducer,
    },
    devTools: process.env.NODE_ENV === "development",
});

const wrapper = createWrapper(() => store);

const { withRedux } = wrapper;

export { withRedux };

export const action_UP = counterSlice.actions.up;
