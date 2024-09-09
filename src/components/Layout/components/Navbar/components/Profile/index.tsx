
import useStore from "../../../../../../store";
import cn from "./style.module.scss";

const Profile = () => {
  const { profile, openProfile, closeProfile } = useStore();

  return (
    <div className={cn.Profile}>
      <div
        onClick={() => {
          openProfile();
        }}
        className={cn.profile_img_btn}
      >
        <img src="./user1.jpg" alt="" />
      </div>
      <div
        style={profile ? { height: "fit-content" } : { height: "0" }}
        className={cn.dropdown}
      >
        <div className={cn.about_profile}>
          <div className={cn.img_wrap}>
            <img src="./user1.jpg" alt="" />
          </div>
          <div className={cn.about}>
            <p>Kevin Larry</p>
            <span>Administrator</span>
          </div>
        </div>
        <ul>
          <li
            onClick={() => {
              closeProfile();
            }}
          >
            <i className="fa-regular fa-user"></i>
            <span>My Profile</span>
          </li>
          <li
            onClick={() => {
              closeProfile();
            }}
          >
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </li>
          <li
            onClick={() => {
              closeProfile();
            }}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
