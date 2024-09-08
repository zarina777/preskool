import { clsx } from "clsx";
import useStore from "../../../../../../store";
import cn from "./style.module.scss";
interface YearDropdownProps {
  style?: Object;
  className?: String;
}
const YearDropdown: React.FC<YearDropdownProps> = ({ className, style }) => {
  const { yearDropdown, openYearDropdown, closeYearDropdown } = useStore();
  return (
    <div style={style} className={clsx(cn.YearDropdown, className)}>
      <div
        className={cn.year_chosen}
        onClick={() => {
          openYearDropdown();
        }}
      >
        <i className="fa-solid fa-calendar-days"></i>
        <span>Academic Year : 2024 / 2025</span>
      </div>
      <ul
        style={yearDropdown ? { height: "fit-content" } : { height: "0" }}
        className={cn.dropdown}
      >
        <li
          onClick={() => {
            closeYearDropdown();
          }}
        >
          <span>Academic Year : 2024 / 2025</span>
        </li>
        <li
          onClick={() => {
            closeYearDropdown();
          }}
        >
          <span>Academic Year : 2024 / 2025</span>
        </li>
        <li
          onClick={() => {
            closeYearDropdown();
          }}
        >
          <span>Academic Year : 2024 / 2025</span>
        </li>
      </ul>
    </div>
  );
};

export default YearDropdown;
