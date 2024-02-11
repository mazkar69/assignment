import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from '../style/GlobalStyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>

)
