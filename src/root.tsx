import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Students from "./routes/StudentInfo";
import "./base.scss";
import { NavProvider } from "./context/nav";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="students" element={<Students />} />
    </Route>
  )
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavProvider>
      <RouterProvider router={router} />
    </NavProvider>
  </StrictMode>
);
