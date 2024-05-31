/* STYLES */
import "./VideoSnippet.scss";

function VideoSnippet() {
  return (
    <article className="video-snippet">
      <div className="video-snippet__image-wrapper">
        <img className="video-snippet__image" src="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg" alt="image of this video" />
      </div>
      <div className="video-snippet__content">
        <h3 className="video-snippet__text video-snippet__text--bold">Exploring Cities of Europe</h3>
        <p className="video-snippet__text">Ryan Gosling</p>
      </div>
    </article>
  )
};

export default VideoSnippet;
