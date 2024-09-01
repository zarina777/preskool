import AddDropdown from "./components/AddDropdown";
import YearDropdown from "./components/YearTimeDropdown";
import cn from "./style.module.scss";

const Navbar = () => {
  return (
    <div className={cn.Navbar}>
      <div className={cn.search}>
        <input type="text" placeholder="Search" />
        <i className="fa-brands fa-searchengin"></i>
      </div>
      <div className={cn.remaining}>
        <YearDropdown />
        <AddDropdown />
      </div>
    </div>
  );
};

export default Navbar;
