import React from "react";
// import ReactDom from 'react-dom';
import {createRoot} from 'react-dom/client';
// const el = React.createElement(
//     'h2',
//     null,
//     'Historial de levantamientos',
//     React.createElement('span', null, ' :heat:')
//
// );
const el = React.createElement(
    'h2',
    null,
    'Historial de levantamientos',
    React.createElement('span', null, ':airplane:')
    )

console.log(el)

const root = createRoot(document.getElementById('levantar-cosas-app'));
root.render(el);

// ReactDom.render(el, document.getElementById('levantar-cosas-app'))