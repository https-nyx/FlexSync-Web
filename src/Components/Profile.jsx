import ProfileStyle from "../Styles/profile.module.css";
import Profilepic from '../assets/images/kegyat.jpg';



const Profile = () => {
  return (
    <div className={ProfileStyle.profileContainer}>
      
      <h1 className={ProfileStyle.username}>Username</h1>

      <p className={ProfileStyle.age}>
        Age:
      </p>
      <p className={ProfileStyle.gender}>
        Gender:
      </p>
      <p className={ProfileStyle.isDisabled}>
        IsDisabled:
      </p>
      <p className={ProfileStyle.mostClickied}>
        Most clicked workout:
      </p>
    </div>
  );
};

export default Profile;