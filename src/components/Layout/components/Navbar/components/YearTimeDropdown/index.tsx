import { clsx } from "clsx";
import cn from "./style.module.scss";
interface YearDropdownProps {
  style?: Object;
  className?: String;
}
const YearDropdown: React.FC<YearDropdownProps> = ({ className, style }) => {
  return (
    <div style={style} className={clsx(cn.YearDropdown, className)}>
      <div className={cn.year_chosen}>
        <i className="fa-solid fa-calendar-days"></i>
        <span>Academic Year : 2024 / 2025</span>
      </div>
      <ul className={cn.dropdown}>
        <li>year number 1</li>
        <li>year number 2</li>
        <li>year number 3</li>
      </ul>
    </div>
  );
};

export default YearDropdown;
