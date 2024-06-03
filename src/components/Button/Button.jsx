/* STYLES */
import "./Button.scss";

function UploadButton({ icon, text, role, onClick, variant }) {
  return (
    <button role={role} className={variant === 'light' ? 'button--light' : 'button' } onClick={onClick}>
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
