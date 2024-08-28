import cn from "./style.module.scss";
import { clsx } from "clsx";
import Groups from "./components/Groups";
import MultiNav from "./components/MultiNavs";

interface SidebarProps {
  className?: string;
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={clsx(cn.Sidebar, className)}>
      <div className={cn.logo_wrap}>
        <img src="./logo.svg" alt="logo..." />
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={cn.navigation}>
        <Groups heading="People">
          <MultiNav name="Students" icon="fa-solid fa-graduation-cap" />
          <MultiNav name="Parents" icon="fa-regular fa-user" />
          <MultiNav name="Guardians" icon="fa-solid fa-shield" />
          <MultiNav name="Teachers" icon="fa-solid fa-users" />
        </Groups>
        <Groups heading="Academic">
          <MultiNav name="Classes" icon="fa-regular fa-bell" />
          <MultiNav name="Parents" icon="fa-regular fa-user" />
          <MultiNav name="Guardians" icon="fa-solid fa-shield" />
          <MultiNav name="Teachers" icon="fa-solid fa-users" />
        </Groups>
        <Groups heading="Academic">
          <MultiNav name="Classes" icon="fa-regular fa-bell" />
          <MultiNav name="Parents" icon="fa-regular fa-user" />
          <MultiNav name="Guardians" icon="fa-solid fa-shield" />
          <MultiNav name="Teachers" icon="fa-solid fa-users" />
        </Groups>
      </div>
    </div>
  );
};

export default Sidebar;
