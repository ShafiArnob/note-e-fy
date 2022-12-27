import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

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
      }
    ],
  },
]);

export default routes