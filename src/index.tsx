import React from "react"
import { createRoot } from 'react-dom/client'; //React 18
import EntryPoint from "./EntryPoint"
import { store } from './store'
import { Provider } from 'react-redux'
import "./index.css"

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <EntryPoint />
    </Provider>
  </React.StrictMode>
);