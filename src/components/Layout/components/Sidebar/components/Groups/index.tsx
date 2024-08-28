import { clsx } from "clsx";
import cn from "./style.module.scss";
interface GroupsProps {
  heading: string;
  children: React.ReactNode;
}

const Groups: React.FC<GroupsProps> = ({ heading, children }) => {
  return (
    <div>
      <div className={clsx(cn.heading)}>
        <h3>{heading}</h3>
        <span className={cn.line}></span>
      </div>
      <ul className={cn.navs_wrap}>{children}</ul>
    </div>
  );
};

export default Groups;
