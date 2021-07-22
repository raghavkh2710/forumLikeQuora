import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React, {useEffect} from 'react';
import "./assets/styles/antd.css";
import Router from "./router";
import * as serviceWorker from "./serviceWorker";
import {useStore} from './Store';

const App = () => {
  
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
