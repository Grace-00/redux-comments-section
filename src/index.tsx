import React from "react"
import ReactDOM from "react-dom"
import EntryPoint from "./EntryPoint"
import { store } from './store'
import { Provider } from 'react-redux'
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <EntryPoint />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)