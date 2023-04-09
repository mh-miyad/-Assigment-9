import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home';
import Blog from './Page/Blog';
import Satistic from './Page/Satistic';
import ErorrPage from './Page/ErorrPage';
import AppliedJobs from './Page/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied-Jobs",
        element: <AppliedJobs/>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/satistic",
        element: <Satistic />,
      },{
        path:'*',
        element:<ErorrPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);