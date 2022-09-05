import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";

import { store } from "./engine/store";

import Counter from "./ui/components/Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Counter />
    </Provider>
);