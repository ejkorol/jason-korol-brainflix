/* STYLES */
import "./UploadPage.scss";
import publishIcon from "@/assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useVideos from "@/utils/hooks/useVideos";

/* COMPONENTS */
import Button from "@/components/Button/Button";

function UploadPage() {

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image, setImage ] = useState(null);
  const [ imagePreview, setImagePreview ] = useState(null);

  const { postVideo, error } = useVideos();

  const navigate = useNavigate();
  function handleCancel() {
    setTitle("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
  };

  function handleImage(e) {
    const imageFile = e.target.files[0];
    setImage(imageFile)
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    };
  };

  function handleUpload() {
    const formData = new FormData();
    const channel = window.prompt("Enter your channel ", "");
    formData.append('title', title);
    formData.append('description', description);
    formData.append('channel', channel);
    formData.append('imageFile', image);
    postVideo(formData);
    if (error) {
      window.alert(error);
    };
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
              { !imagePreview && <label htmlFor="image" className="upload__file-input-label">select an image</label> }
              <input className="upload__file-input" id="image" type="file" onChange={handleImage}  accept="image/*" required />
              { imagePreview && <img className="upload__image" src={imagePreview} alt="work hard everyday, make few fucking money" /> }
            </div>
          </div>

          <div className="upload__right">

            <form className="upload-form" onSubmit={handleUpload}>
              <label className="upload-form__label">title your video</label>
              <textarea className="upload-form__input" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Add a title to your video"></textarea>

              <label className="upload-form__label">add a video description</label>
              <textarea className="upload-form__textarea" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Add a description to your video"></textarea>
            </form>

          </div>
        </div>
      </div>

      <div className="upload-footer">
        <div className="upload-footer__container">
          <div className="upload-footer__cancel-button">
            <Button role="link" text="cancel / clear" onClick={handleCancel} variant="light" />
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
