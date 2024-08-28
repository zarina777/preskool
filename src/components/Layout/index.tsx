import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import cn from "./style.module.scss";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/students");
    }
  }, []);
  return (
    <div className={cn.Layout}>
      <Sidebar />
      <div className={cn.content_layout}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
