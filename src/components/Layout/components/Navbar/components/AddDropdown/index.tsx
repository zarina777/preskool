import { clsx } from "clsx";
import cn from "./style.module.scss";
interface AddDropdownProps {
  style?: Object;
  className?: String;
}
const AddDropdown: React.FC<AddDropdownProps> = ({ className, style }) => {
  return (
    <div style={style} className={clsx(cn.AddDropdown, className)}>
      AddDropdown
    </div>
  );
};

export default AddDropdown;
