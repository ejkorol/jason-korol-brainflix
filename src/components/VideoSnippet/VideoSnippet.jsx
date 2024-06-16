/* LOGIC */
import { Link } from "react-router-dom";

/* STYLES */
import "./VideoSnippet.scss";

const APIURL = import.meta.env.VITE_API_URL;

function VideoSnippet({ image, title, author, id }) {

  return (
    <Link to={`/video/${id}`} className="video-snippet__link">
      <article className="video-snippet">
        <div className="video-snippet__image-wrapper">
          <img className="video-snippet__image" src={`${APIURL}${image}`} alt={title} />
        </div>
        <div className="video-snippet__content">
          <h3 className="video-snippet__text video-snippet__text--bold">{title}</h3>
          <p className="video-snippet__text">{author}</p>
        </div>
      </article>
    </Link>
  );

};

export default VideoSnippet;
