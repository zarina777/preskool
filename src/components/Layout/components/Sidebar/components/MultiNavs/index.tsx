import cn from "./style.module.scss";
interface MultiNavProps {
  icon: string;
  name: string;
}
const MultiNav: React.FC<MultiNavProps> = ({ icon, name }) => {
  return (
    <div className={cn.MultiNav}>
      <div className={cn.wrap}>
        <i className={icon}></i>
        <span className={cn.name}>{name}</span>
      </div>
      <span className={cn.arrow}>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
	  
    </div>
  );
};

export default MultiNav;
