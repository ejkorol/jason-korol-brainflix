/* STYLES */
import "./Button.scss";

function UploadButton({ icon, text }) {
  return (
    <button className="button">
      <span className="button__icon">
        <img src={icon}/>
      </span>
      <span className="button__text">
        <p>{ text }</p>
      </span>
    </button>
  )
};

export default UploadButton;
