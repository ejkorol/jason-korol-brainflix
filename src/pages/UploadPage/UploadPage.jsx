/* STYLES */
import "./UploadPage.scss";
import publishIcon from "@/assets/icons/publish.svg";
import videoPlaceholder from "@/assets/images/Upload-video-preview.jpg";

/* COMPONENTS */
import Button from "@/components/Button/Button";

function UploadPage() {

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

            <form className="upload-form">
              <label className="upload-form__label">title your video</label>
              <textarea className="upload-form__input" placeholder="Add a title to your video"></textarea>

              <label className="upload-form__label">add a video description</label>
              <textarea className="upload-form__textarea" placeholder="Add a description to your video"></textarea>
            </form>

          </div>
        </div>
      </div>

      <div className="upload-footer">
        <div className="upload-footer__container">
          <div className="upload-footer__cancel-button">
            <Button role="button" text="cancel" variant="light" />
          </div>
          <div className="upload-footer__publish-button">
            <Button icon={publishIcon} role="button" text="publish" />
          </div>
        </div>
      </div>

    </section>
  );

};

export default UploadPage;
