import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home, MainLayout, Post, User } from "./components";

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/user',
        element: <User />,
      }
    ]},
]);

export { router };
