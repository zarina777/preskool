import AddDropdown from "./components/AddDropdown";
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import YearDropdown from "./components/YearTimeDropdown";
import cn from "./style.module.scss";

const Navbar = () => {
  return (
    <div className={cn.Navbar}>
      <Logo />
      <div className={cn.wrap}>
        <div className={cn.search}>
          <input type="text" placeholder="Search" />
          <i className="fa-brands fa-searchengin"></i>
        </div>
        <div className={cn.remaining}>
          <YearDropdown />
          <AddDropdown />
          <span className={cn.mode}>
            <i className="fa-solid fa-moon"></i>
          </span>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
