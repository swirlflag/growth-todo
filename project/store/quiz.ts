import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { stateWithStatus, statusCommit } from "@/core/util.ts";

import { API_getQuiz } from "api/index.ts";

export const requestQuizList = createAsyncThunk("quiz/fetch", async (data, { rejectWithValue }) => {
    try {
        const response = await API_getQuiz();
        return response.data.results;
    } catch (err) {
        // if (!err.response) {
        //     throw err;
        // }
        return rejectWithValue(err.response.data);
    }
});

export const quizSliceInfo = {
    name: "quiz",
    initialState: {},
    initialStateWithStatus: {
        quizList: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(requestQuizList.pending, (quiz, action) => {
            statusCommit.request(quiz.quizList_status);
        });
        builder.addCase(requestQuizList.fulfilled, (quiz, action) => {
            statusCommit.done(quiz.quizList_status);
            quiz.quizList = action.payload;
        });
        builder.addCase(requestQuizList.rejected, (quiz, action) => {
            statusCommit.failure(quiz.quizList_status,action.error.message);
        });
    },
};


const quizSlice = createSlice(stateWithStatus(quizSliceInfo));

export default quizSlice;