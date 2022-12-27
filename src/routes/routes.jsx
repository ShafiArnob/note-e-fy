import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
        path:"page",
        element:<Home/>,
      },

      {
        path:"login",
        element:<Login/>,
      },
    ],
  },
]);

export default routes