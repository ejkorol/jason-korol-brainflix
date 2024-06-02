/* STYLES */
import "./VideoSnippet.scss";

function VideoSnippet({ image, title, author, onClick }) {
  return (
    <article className="video-snippet" onClick={onClick}>
      <div className="video-snippet__image-wrapper">
        <img className="video-snippet__image" src={image} alt={title} />
      </div>
      <div className="video-snippet__content">
        <h3 className="video-snippet__text video-snippet__text--bold">{title}</h3>
        <p className="video-snippet__text">{author}</p>
      </div>
    </article>
  )
};

export default VideoSnippet;
