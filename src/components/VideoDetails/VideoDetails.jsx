/* STYLES */
import "./VideoDetails.scss";

/* ICONS */
import heartIcon from "@/assets/icons/likes.svg";
import eyeIcon from "@/assets/icons/views.svg";

function VideoDetails (props) {
  return (
    <>
      <div className="video-details__title">
        <h1 className="video-details__header">{props.video.title}</h1>
      </div>

      <div className="video-details__content">
        <div className="video-details__wrapper">
          <div className="video-details__author">
            <p className="video-details__text video-details__text--bold">{props.video.channel}</p>
            <p className="video-details__text video-details__text--light">{props.video.timestamp}</p>
          </div>

          <div className="video-details__info">
            <p className="video-details__text video-details__text--light">
              <span className="video-details__text--icon">
                <img src={heartIcon} alt="likes icon" />
              </span>
              {props.video.likes}
            </p>

            <p className="video-details__text video-details__text--light">
              <span className="video-details__text--icon">
                <img src={eyeIcon} alt="views icon" />
              </span>
              {props.video.views}
            </p>
          </div>
        </div>

        <div className="video-details__wrapper video-details__wrapper--no-border">
          <p className="video-details__text">{props.video.description}</p>
        </div>
      </div>
    </>
  )
};

export default VideoDetails;
