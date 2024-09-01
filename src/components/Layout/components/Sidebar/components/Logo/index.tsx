import cn from "./style.module.scss";

const Logo = () => {
  return (
    <div className={cn.logo_wrap}>
      <img src="./logo.svg" alt="logo..." />
      <i className="fa-solid fa-align-right"></i>
    </div>
  );
};

export default Logo;
