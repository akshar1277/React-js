import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import { Provider} from "react-redux";
import { BrowserRouter } from "react-router";
import {store} from "./store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
        
        <App/>
    
    </BrowserRouter>
</Provider>

);   