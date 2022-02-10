import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "./contexts/ThemeContext"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store/store"
import {AuthProvider} from "./contexts/AuthContext"
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
