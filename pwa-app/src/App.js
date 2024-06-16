import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Users from "./pages/Users";
import About from "./pages/About";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;