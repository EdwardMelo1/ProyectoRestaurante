import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from "../src/Vistas/Home"
import Categoriass from "./Vistas/Categoriass"




const router=createBrowserRouter([
    {
        path:"/categories",
        element:<Categoriass/>,
    },
    {
        path:"/inicio",
        element: <Home/>,
    },
    {
        path:"/",
        element: <App/>,
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


