import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import myCreatedRoutes from './Route/Route'
import { RouterProvider } from 'react-router-dom'



// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element: <div>This is my first home route</div>
//   },
//   {
//     path:"/products",
//     element:<div>Products route hitted</div>
//   },
//   {
//     path:"/about",
//     element:<div>about route hitted</div>
//   },
// ])

// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element : <section>
//       <div>This is a fixed item</div>
//       <Outlet></Outlet>

//     </section>,
//     children : [
//       {
//         path: "/",
//         element : <div>This is home route</div>
//       },
//       {
//         path: "/products",
//         element : <div>Products page</div>
//       }
//     ]
//   }


// ])


// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element : <MainLayout></MainLayout>,
//     children : [
//       {
//         path: "/",
//         element : <Home></Home>
//       },
//       {
//         path: "/products",
//         element : <Products></Products>
//       }
//     ]
//   }
// ])


// const myCreatedRoutes = createBrowserRouter([
//   {
//     path:'/',
//     element:<div>thies is my home</div>
//   },
//   {
//     path:'/about',
//     element:<div>about routed hitted</div>
//   }
// ])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRoutes}></RouterProvider>
  </React.StrictMode>,
)
