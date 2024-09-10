import { clsx } from "clsx";
import useStore from "../../../../../../store";
import cn from "./style.module.scss";
interface AddDropdownProps {
  style?: Object;
  className?: String;
}
const AddDropdown: React.FC<AddDropdownProps> = ({ className, style }) => {
  const { addDropdown, openAddDropdown, closeAddDropdown } = useStore();
  return (
    <div style={style} className={clsx(cn.AddDropdown, className)}>
      <div
        onClick={() => {
          openAddDropdown();
        }}
        className={cn.btn}
      >
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div
        style={addDropdown ? { display: "block" } : { display: "none" }}
        className={cn.dropdown}
      >
        <h3>Add New</h3>
        <ul>
          <li
            onClick={() => {
              closeAddDropdown();
            }}
          >
            <div className={cn.circle}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <span>Students</span>
          </li>
          <li
            onClick={() => {
              closeAddDropdown();
            }}
          >
            <div className={cn.circle}>
              <i className="fa-solid fa-user-group"></i>
            </div>
            <span>Teachers</span>
          </li>
          <li
            onClick={() => {
              closeAddDropdown();
            }}
          >
            <div className={cn.circle}>
              <i className="fa-solid fa-users"></i>
            </div>
            <span>Staffs</span>
          </li>
          <li
            onClick={() => {
              closeAddDropdown();
            }}
          >
            <div className={cn.circle}>
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <span>Invoice</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddDropdown;
