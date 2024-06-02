/* STYLES */
import "./VideoDetails.scss";

/* ICONS */
import heartIcon from "@/assets/icons/likes.svg";
import eyeIcon from "@/assets/icons/views.svg";

function VideoDetails () {
  return (
    <>
      <div className="video-details__title">
        <h1 className="video-details__header">The Future of Artifical Intelligence</h1>
      </div>

      <div className="video-details__content">
        <div className="video-details__wrapper">
          <div className="video-details__author">
            <p className="video-details__text video-details__text--bold">By Aiden Thompson</p>
            <p className="video-details__text video-details__text--light">8/8/2023</p>
          </div>

          <div className="video-details__info">
            <p className="video-details__text video-details__text--light">
              <span className="video-details__text--icon">
                <img src={heartIcon} alt="likes icon" />
              </span>
              980,544
            </p>

            <p className="video-details__text video-details__text--light">
              <span className="video-details__text--icon">
                <img src={eyeIcon} alt="views icon" />
              </span>
              980,544
            </p>
          </div>
        </div>

        <div className="video-details__wrapper video-details__wrapper--no-border">
          <p className="video-details__text">Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
        </div>
      </div>
    </>
  )
};

export default VideoDetails;
