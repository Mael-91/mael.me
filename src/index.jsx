import React from "react";
import ReactDom from "react-dom"
import App from "./App";
import * as serviceWorker from './serviceWorker.worker.js';
import Worker from 'worker-loader!./serviceWorker.worker.js';

ReactDom.render(<App/>, document.getElementById('root'))

serviceWorker.register()
