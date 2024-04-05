import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import { HomePage, SignInPage, SignUpPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignInPage />,
      },
      {
        path: "register",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default function Home() {
  return <RouterProvider router={router} />;
}
