import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/defaultLayout";
//import { Navigate } from "react-router-dom";
import Home from "@/viewer/Home";
import Inbox from "@/viewer/Inbox";
import EmployeesView from "@/moduler/employess/EmployeesView";

const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element:<Home/>,
        },
        {
          path: "/inbox",
          element: <Inbox/>,
          
        },
        {
            path: "/calendar",
            element: <h1>Calendar</h1>,
            
          },
          {
            path: "/user",
            element: <EmployeesView/>,
            
          },
          {
            path: "/settings",
            element: <h1>Settings</h1>,
            
          }]
    }
])
        

const Wrapper = () => {
  return (
        <RouterProvider router={router}></RouterProvider>

  )
}

export default Wrapper;