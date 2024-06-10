/* STYLES */
import "./UploadPage.scss";
import publishIcon from "@/assets/icons/publish.svg";
import videoPlaceholder from "@/assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

/* COMPONENTS */
import Button from "@/components/Button/Button";

function UploadPage() {

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const navigate = useNavigate();
  function handleCancel() {
    navigate("/");
  };

  function handleUpload() {
    alert("Upload success!");
    navigate("/");
  };

  return (
    <section className="upload">

      <div className="upload__container">

        <h1 className="upload__header">Upload Video</h1>

        <div className="upload__wrapper">
          <div className="upload__left">
            <label className="upload__label">video thumbnail</label>
            <div className="upload__image-wrapper">
              <img className="upload__image" src={videoPlaceholder} alt="work hard everyday, make few fucking money" />
            </div>
          </div>

          <div className="upload__right">

            <form className="upload-form" onSubmit={handleUpload}>
              <label className="upload-form__label">title your video</label>
              <textarea className="upload-form__input" ref={titleRef} required placeholder="Add a title to your video"></textarea>

              <label className="upload-form__label">add a video description</label>
              <textarea className="upload-form__textarea" ref={descriptionRef} required placeholder="Add a description to your video"></textarea>
            </form>

          </div>
        </div>
      </div>

      <div className="upload-footer">
        <div className="upload-footer__container">
          <div className="upload-footer__cancel-button">
            <Button role="link" text="cancel" onClick={handleCancel} variant="light" />
          </div>
          <div className="upload-footer__publish-button">
            <Button icon={publishIcon} onClick={handleUpload} type="submit" role="submit" text="publish" />
          </div>
        </div>
      </div>

    </section>
  );

};

export default UploadPage;
