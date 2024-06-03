/* STYLES */
import "./Comment.scss";

/* COMPONENTS */
import Avatar from "@/components/Avatar/Avatar";

function Comment({ name, timestamp, content }) {

  function convertTimestamp(time) {
    return new Date(time).toLocaleDateString('en-US');
  };

  return (
    <article className="comment">
      <div className="comment__image-wrapper">
        <Avatar />
      </div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__text comment__text--bold">{name}</p>
          <p className="comment__text comment__text--light">{convertTimestamp(timestamp)}</p>
        </div>
        <div className="comment__body">
          <p className="comment__text">{content}</p>
        </div>
      </div>
    </article>
  )
};

export default Comment;
