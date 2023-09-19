import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './About.jsx';

import Home from './Home';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Users from './Users';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/home',
        element:<Home/>
      }
    ,
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users/>
      }
     ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
