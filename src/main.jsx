import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import data from './Data/jobs.json'
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
import Details from './Page/Details';

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
        path: "details/:detailsId",
        element: <Details />,
        loader:({params})=>  params.detailsId,
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