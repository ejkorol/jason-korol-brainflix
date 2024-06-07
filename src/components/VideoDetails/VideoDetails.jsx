/* STYLES */
import "./VideoDetails.scss";

/* ICONS */
import heartIcon from "@/assets/icons/likes.svg";
import eyeIcon from "@/assets/icons/views.svg";

function VideoDetails ({ video: { title, channel, timestamp, likes, views, description } }) {

  function convertTimestamp(time) {
    return new Date(time).toLocaleDateString('en-US');
  };

  return (
    <>
      <div className="video-details__title">
        <h1 className="video-details__header">{title}</h1>
      </div>

      <div className="video-details__content">
        <div className="video-details__wrapper">
          <div className="video-details__author">
            <p className="video-details__text video-details__text--bold">By {channel}</p>
            <p className="video-details__text video-details__text--light">{convertTimestamp(timestamp)}</p>
          </div>

          <div className="video-details__info">
            <p className="video-details__text video-details__text--light">
              <span className="video-details__text--icon">
                <img src={heartIcon} alt="likes icon" />
              </span>
              {likes}
            </p>

            <p className="video-details__text video-details__text--light">
              <span className="video-details__text--icon">
                <img src={eyeIcon} alt="views icon" />
              </span>
              {views}
            </p>
          </div>
        </div>

        <div className="video-details__wrapper video-details__wrapper--no-border">
          <p className="video-details__text">{description}</p>
        </div>
      </div>
    </>
  );

};

export default VideoDetails;
