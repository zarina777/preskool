import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Students from "./routes/StudentInfo";
import "./base.scss";
import AdminPage from "./routes/admin";
import Auth from "./routes/Auth";
import Teacher from "./routes/teacher";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Auth />} />
      <Route path="/students" element={<Layout />}>
        <Route path="" element={<Students />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route path="" element={<AdminPage />} />
      </Route>
      <Route path="/teacher" element={<Layout />}>
        <Route path="" element={<Teacher />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
