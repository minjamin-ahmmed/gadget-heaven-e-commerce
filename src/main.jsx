import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import GadgetCards from './Components/GadgetCards/GadgetCards';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';

import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,

    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path:"/",
            element:<GadgetCards></GadgetCards>,
            loader: () => fetch('../allProducts.json')
          },
          {
            path:"/category/:category",
            element:<GadgetCards></GadgetCards>,
            loader: () => fetch('../allProducts.json')
          }
        ]
      },

      {
          path:"/details/:productId",
          element: <GadgetDetails></GadgetDetails>,
          loader: () => fetch("../allProducts.json")

      },

      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../allProducts.json')

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <Toaster />
  </StrictMode>,
)
