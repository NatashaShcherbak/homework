import React from 'react';
import ReactDOM from 'react-dom/client';

import "./ui/_helpers/assets/css/main.css";

import { Provider } from "react-redux";

import { store } from "./engine/init/store";

import Wrapper from "./ui/containers/Wrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Wrapper />
    </Provider>
);
