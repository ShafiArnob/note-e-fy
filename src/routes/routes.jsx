import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page from "../pages/Page";
import Signup from "../pages/Signup";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      
      {
        path:"pages/:id",
        element:<Page></Page>,
      },

      {
        path:"login",
        element:<Login/>,
      },
      {
        path:"signup",
        element:<Signup/>,
      },
    ],
  },
]);

export default routes