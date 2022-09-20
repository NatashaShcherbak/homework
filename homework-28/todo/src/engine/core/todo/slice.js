import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    edit: null,
    search: undefined,
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
            state.search = undefined;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    }
});

export const { setItem, editItem, setSearch } = todo.actions;

export default todo.reducer;