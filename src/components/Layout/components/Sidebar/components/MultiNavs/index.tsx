import { clsx } from "clsx";
import { useRef, useState } from "react";
import cn from "./style.module.scss";
interface MultiNavProps {
  icon: string;
  name: string;
}
const MultiNav: React.FC<MultiNavProps> = ({ icon, name }) => {
  const dropdown = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className={cn.wrapper}>
      <div
        style={!open ? { backgroundColor: "#F2F5FF" } : {}}
        onClick={() => {
          setOpen((prev: boolean) => (prev ? false : true));
        }}
        className={cn.MultiNav}
      >
        <div className={cn.wrap}>
          <i className={icon}></i>
          <span className={cn.name}>{name}</span>
        </div>
        <span className={cn.arrow}>
          <i
            className={clsx(
              "fa-solid",
              open ? "fa-chevron-down" : "fa-chevron-right"
            )}
          ></i>
        </span>
      </div>
      <ul
        style={{ maxHeight: open ? "0" : "fit-content" }}
        ref={dropdown}
        className={cn.dropdown}
      >
        <li>All Students</li>
        <li>Student List</li>
      </ul>
    </div>
  );
};

export default MultiNav;
