import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Investigate from'./pages/Investigate';
import Generate from'./pages/Generate';
import Login from'./pages/Login';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Investigate",
    element: <Investigate />,
  },
  {
    path: "/Generate",
    element: <Generate />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
