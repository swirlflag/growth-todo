import { createSlice } from "@reduxjs/toolkit";

const counterSliceInfo = {
    name: "counter",
    initialState: {
        value: 50,
    },
    reducers: {
        increase: (counter, action) => {
            counter.value += action.payload || 0;
        },
    },
};

const counterSlice = createSlice(counterSliceInfo);

export default counterSlice;

export const COUNTER_UP = counterSlice.actions.increase;