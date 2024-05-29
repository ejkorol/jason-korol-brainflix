import "./Avatar.scss";
import userAvatar from "@/assets/images/Mohan-muruge.jpg"

function Avatar () {
  return (
    <img src={userAvatar} alt="User Avatar" className="header__avatar" />
  )
};

export default Avatar;
