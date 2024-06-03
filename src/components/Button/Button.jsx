/* STYLES */
import "./Button.scss";

function UploadButton({ icon, text, role, onClick }) {
  return (
    <button role={role} className="button" onClick={onClick}>
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
