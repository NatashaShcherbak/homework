import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import todo from "../core/todo/slice";

export const store = configureStore({
    reducer: {
        todo,
    },
    middleware: [thunk],
});