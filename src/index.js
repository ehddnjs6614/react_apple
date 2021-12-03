import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

let 기본값 = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '이쁜신발', quan: 4 },
  { id: 2, name: '섹시한신발', quan: 12 },
]

function reducer(state = 기본값, action) {
  if (action.type === '증가') {
    let copy = [...state]
    copy[0].quan++
    return copy
  } else if (action.type === '감소') {
    let copy1 = [...state]
    copy1[0].quan--
    return copy1
  } else {
    return state
  }
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
