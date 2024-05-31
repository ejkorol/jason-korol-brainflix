/* STYLES */
import "./VideoDetails.scss";

/* ICONS */
import heartIcon from "@/assets/icons/likes.svg";
import eyeIcon from "@/assets/icons/views.svg";

function VideoDetails () {
  return (
    <section className="video-player__content">

      <div className="video-player__wrapper">
        <h1 className="video-player__header">The Future of Artifical Intelligence</h1>
      </div>

      <div className="video-content">
        <div className="video-content__wrapper">
          <div className="video-content__author">
            <p className="video-content__text video-content__text--bold">By Aiden Thompson</p>
            <p className="video-content__text video-content__text--light">8/8/2023</p>
          </div>

          <div className="video-content__info">
            <p className="video-content__text video-content__text--light">
              <span className="video-content__text--icon">
                <img src={heartIcon} alt="likes icon" />
              </span>
              980,544
            </p>

            <p className="video-content__text video-content__text--light">
              <span className="video-content__text--icon">
                <img src={eyeIcon} alt="views icon" />
              </span>
              980,544
            </p>
          </div>
        </div>

        <div className="video-content__wrapper video-content__wrapper--no-border">
          <p className="video-content__text">Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
        </div>
      </div>

    </section>
  )
};

export default VideoDetails;
