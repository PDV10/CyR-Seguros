import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "virtual:generated-pages-react"; //
import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
