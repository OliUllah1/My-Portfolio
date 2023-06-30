import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home/Home';
import Skills from './Pages/Home/Skills/Skills';
import About from './Pages/Home/About/About';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Contact from './Pages/Home/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'skills',
        element:<Skills></Skills>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
