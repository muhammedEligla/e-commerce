
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Product from './components/Product';
import Card from './components/Card';
import Login from './pages/Login';


const Layout = ()=>{
  return(
     <>
  <Header />
  <Outlet />
  <Footer />
  </>
  )
 
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />   ,
    children:[
      {
        path:"/",
        element: <Home />,
      },{
        path:"/product/:proId",
        element: <Product />
      },
      {
        path:"/cart",
        element: <Product />

      },
      {
        path:"/card",
        element: <Card />

      },
      {
        path:"/login",
        element: <Login />

      }
    ]
  },
]);


function App() {

  return (
    <div >
  <RouterProvider router={router} />
    </div>
  )
}

export default App
