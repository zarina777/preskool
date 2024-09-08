import cn from "./style.module.scss";

const Profile = () => {
  return (
    <div className={cn.Profile}>
      <div className={cn.profile_img_btn}>
        <img src="./user1.jpg" alt="" />
      </div>
      <div className={cn.dropdown}>
        <div className={cn.about_profile}>
          <img src="./user1.jpg" alt="" />
          <div className={cn.about}>
            <h3>Kevin Larry</h3>
            <p>Administrator</p>
          </div>
          <ul>
            <li>
              <i className="fa-regular fa-user"></i>
              <span>My Profile</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
