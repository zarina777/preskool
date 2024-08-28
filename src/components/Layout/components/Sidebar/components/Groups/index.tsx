import { clsx } from "clsx";
import cn from "./style.module.scss";
interface GroupsProps {
  heading: string;
  children?: React.ReactNode;
}

const Groups: React.FC<GroupsProps> = ({ heading, children }) => {
  return (
    <div className={cn.Group}>
      <div className={clsx(cn.heading)}>
        <h4>{heading}</h4>
        <span></span>
      </div>
      <ul className={cn.navs_wrap}>{children}</ul>
    </div>
  );
};

export default Groups;
