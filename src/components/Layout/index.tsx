import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import cn from "./style.module.scss";

const Layout = () => {
  return (
    <div className={cn.Layout}>
      <Navbar />
      <Sidebar />
      <div className={cn.content_layout}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
