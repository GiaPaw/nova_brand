import '../styles/Style.scss';
import '../styles/Dark.scss'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductWomen from '../pages/ProductWomen/ProductWomen';
import ProductsMen from '../pages/ProductMen/ProductsMen';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Account from '../pages/Account/Account'
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomeAdmin from '../pages/Admin/Home/HomeAdmin';  
import ListAdmin from '../pages/Admin/List/ListAdmin';
import ListOrder from '../pages/Admin/List/ListOrder';

import Single from '../pages/Admin/Single/Single';
import NewProductDetail from '../pages/Admin/New/NewProductDetail';
import NewProductCategory from '../pages/Admin/New/NewProductCategory';
import NewProduct from '../pages/Admin/New/NewProduct';
import NewUser from '../pages/Admin/New/NewUser';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile'
import SearchResultPage from '../pages/SearchResultPage/SearchResultPage'

import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
import ListProduct from '../pages/Admin/List/ListProduct';
import EditProductDetail from '../pages/Admin/Edit/EditProductDetail';

// import { useSelector } from 'react-redux';
import Checkout from '../components/Checkout/Checkout';
import Payment from '../components/Payment/Payment';
import PaymentSuccess from '../components/Payment/PaymentSuccess';

const Layout =() =>{

  

  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const LayoutAdmin =()=>{
  return(
    <>
      <Outlet />
    </>
  )
}


function App() {
  const {darkMode} = useContext(DarkModeContext)
  const token = localStorage.getItem("token");
 // const userRole = useSelector(state => state.auth.login.userRole);
 let userRole
 if(token){
  userRole = JSON.parse(atob(token.split(".")[1])).role;
 }
  const checkAdminAccess = (element) => {
    if (userRole === 2) {
      return element; // Cho phép truy cập vào route nếu là admin
    } else {
      return "you dont have quyền để vô đây!! "; // Không cho phép truy cập vào route nếu không phải admin
    }
  };
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/Products",
        element: <Products />
      },
      {
        path:"/Product/:id",
        element: <Product />
      },
      {
        path:"/Products/women",
        element: <ProductWomen />
      },
      {
        path:"/Products/men",
        element: <ProductsMen />
      },
      {
        path:"/About",
        element: <About />
      },
      {
        path:"/Contact",
        element: <Contact />
      },
      {
        path:"/Account",
        element: <Account />
      },
      {
        path:"/update-profile",
        element: <UpdateProfile />
      },
      {
        path:"/search-results",
        element: <SearchResultPage />
      },
      {
        path:"/Checkout",
        element: <Checkout />
      },
      {
        path:"/Payment",
        element: <Payment />
      },
      {
        path:"/PaymentSucces",
        element: <PaymentSuccess />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // admin
  {
    path: "/",
    element: checkAdminAccess(<LayoutAdmin />),
    children:[
      {
        path: "/homeadmin",
        element: checkAdminAccess(<HomeAdmin/>),
      },
      {
        path: "/users",
        element: checkAdminAccess(<ListAdmin/>),
      },
      {
        path: "/users/:id",
        element: checkAdminAccess(<Single/>),
      },
      {
        path: "/users/news",
        element: checkAdminAccess(<NewUser/>),
      },
      {
        path: "/productAdmin",
        element: checkAdminAccess(<ListProduct/>),
      },
      {
        path: "/productAdmin/:id",
        element: checkAdminAccess(<Single/>),
      },
      {
        path: "/productAdmin/news",
        element: checkAdminAccess(<NewProduct />),
      },
      {
        path: "/productDetailAdmin/news",
        element: checkAdminAccess(<NewProductDetail />),
      },
      {
        path: "/productCategoryAdmin/news",
        element: checkAdminAccess(<NewProductCategory/>),
      },
      {
        path: "/productDetailAdmin/edit/:id",
        element: checkAdminAccess(<EditProductDetail/>),
      },
      {
        path: "/order",
        element: checkAdminAccess(<ListOrder/>),
      },
    ]
  },
  
]);
  return (
    <div className={ darkMode ? "app App dark": "app App"}>
      <div className='Conta iner'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
