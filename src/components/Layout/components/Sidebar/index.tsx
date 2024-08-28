import cn from "./style.module.scss";
import { clsx } from "clsx";

interface SidebarProps {
  className?: string;
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={clsx(cn.Sidebar, className)}>
      <div className={cn.wrap}>
        <img src="./logo.svg" alt="logo..." />
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </div>
  );
};

export default Sidebar;
