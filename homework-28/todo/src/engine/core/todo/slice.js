import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    edit: null,
};

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload;
        },
        editItem: (state, action) => {
            state.edit = action.payload;
        },
        setDefault: (state, action) => {
            state.items = action.payload;
            state.edit = null;
        },
    }
});

export const { setItem, editItem } = todo.actions;

export default todo.reducer;