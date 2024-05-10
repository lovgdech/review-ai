import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
// import AuthLayout from "./layout/AuthLayout";
import {
  HomePage,
  AboutPage,
  // SignInPage,
  // SignUpPage,
  ContactPage,
  ErrorPage,
  AiToolPage,
  // BlogPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "ai-tools",
        element: <AiToolPage />,
      },
      // {
      //   path: "blogs",
      //   element: <BlogPage />,
      // },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  // {
  //   path: "/auth",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <SignInPage />,
  //     },
  //     {
  //       path: "register",
  //       element: <SignUpPage />,
  //     },
  //   ],
  // },
]);

export default function Home() {
  return <RouterProvider router={router} />;
}
