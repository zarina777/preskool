import { clsx } from "clsx";
import cn from "./style.module.scss";
interface AddDropdownProps {
  style?: Object;
  className?: String;
}
const AddDropdown: React.FC<AddDropdownProps> = ({ className, style }) => {
  return (
    <div style={style} className={clsx(cn.AddDropdown, className)}>
      <div className={cn.btn}>
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div className={cn.dropdown}>
        <h3>Add New</h3>
        <ul>
          <li>
            <div className={cn.circle}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <span>Students</span>
          </li>
          <li>
            <div className={cn.circle}>
              <i className="fa-solid fa-user-group"></i>
            </div>
            <span>Teachers</span>
          </li>
          <li>
            <div className={cn.circle}>
              <i className="fa-solid fa-users"></i>
            </div>
            <span>Staffs</span>
          </li>
          <li>
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
