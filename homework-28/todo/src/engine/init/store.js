import { configureStore } from "@reduxjs/toolkit";

import todo from "../core/todo/slice";

export const store = configureStore({
    reducer: {
        todo,
    }
});