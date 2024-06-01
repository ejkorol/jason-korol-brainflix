/* STYLES */
import "./Avatar.scss";

function Avatar (props) {
  return (
    <img src={props.image} alt={props.image ? "User Avatar" : null } className={props.image ? "avatar" : "avatar avatar--placeholder"} />
  )
};

export default Avatar;
