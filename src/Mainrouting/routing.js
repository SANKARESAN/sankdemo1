import { createBrowserRouter } from "react-router-dom";

import MainDashboard from '../layout/MainDashboard';
import NavComp from '../layout/NavComp';
import FooterComp from "../layout/Footer";
import PageNotFoundComp from "../layout/PageNotFoundComp";

import AddProductComp from "../CRUD/AddProductComp";
import EditProductComp from "../CRUD/EditProductComp";
import DeleteComp from "../CRUD/DeleteComp";
import ProductDashComp from "../CRUD/ProductDashComp";

import AboutComp from "../Components/AboutComp";
import ContactComp from "../Components/ContactComp";
import HomeComp from "../Components/HomeComp";
import ProductsComp from "../Components/ProductsComp";

import FooterComp from "../layout/Footer";




const routing = createBrowserRouter([

    {path:"MainDashboard", element:<MainDashboard/>, children:[

        {path:"AboutComp", element:<AboutComp></AboutComp>},
        {path:"ContactComp", element:<ContactComp></ContactComp>},
        {path:"HomeComp", element:<HomeComp></HomeComp>},
        {path:"ProductsComp", element:<ProductsComp></ProductsComp>},

        {path:"AddProductComp", element:<AddProductComp></AddProductComp>},
        {path:"EditProductComp", element:<EditProductComp></EditProductComp>},
        {path:"DeleteComp", element:<DeleteComp></DeleteComp>},
        {path:"ProductDashComp", element:<ProductDashComp></ProductDashComp>},
        {path:"FooterComp", element:<FooterComp></FooterComp>},

    ]},
    
 
    {path:"*",element:<PageNotFoundComp />}

]);

export default routing;
