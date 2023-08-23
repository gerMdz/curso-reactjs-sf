import React from "react";
// import ReactDom from 'react-dom';
import { render } from 'react-dom';

import RepLogApp from "./Components/RepLogApp";

import {createRoot} from 'react-dom/client';
// const el = React.createElement(
//     'h2',
//     null,
//     'Historial de levantamientos',
//     React.createElement('span', null, ' :heat:')
//
// );
// const el = React.createElement(
//     'h2',
//     null,
//     'Historial de levantamientos ',
//     React.createElement('span', null, ':heart:')
//     )






// const root = createRoot(document.getElementById('levantar-cosas-app'));
// root.render(el);


render(<RepLogApp />, document.getElementById('levantar-cosas-app'))