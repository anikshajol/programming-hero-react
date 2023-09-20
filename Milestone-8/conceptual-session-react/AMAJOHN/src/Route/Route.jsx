
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Dashbord from '../Pages/Dashbord/Dashbord';
import { Footer } from 'flowbite-react';


  const myCreatedRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/dashbord',
                element:<Dashbord></Dashbord>
            },
        {
            path:'/footer',
            element: <Footer></Footer>
        }
        ]

    }
  ])


export default myCreatedRoutes;