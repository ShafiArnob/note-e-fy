import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { projectAuth } from "../firebase/config";
import RequireAuth from "../firebase/RequireAuth";
import Main from "../layout/Main";
import Boards from "../pages/Boards";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Page from "../pages/Page";
import Signup from "../pages/Signup";

const user = projectAuth.currentUser

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      // {
      //   path:"/",
      //   element:!user ? <Home/> : <Navigate to="/pages"/>,
      // },
      {
        path:"/",
        element:<RequireAuth><Boards/></RequireAuth>,
      },
      
      {
        path:"pages/:id",
        element:<RequireAuth><Page/></RequireAuth>,
      },

      {
        path:"login",
        element: user ? <Navigate to="/"/> : <Login/>,
      },
      {
        path:"signup",
        element: user ? <Navigate to="/"/> : <Signup/>  
      },
    ],
  },
]);

export default routes