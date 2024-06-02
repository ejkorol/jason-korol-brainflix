/* STYLES */
import "./Comment.scss";

/* COMPONENTS */
import Avatar from "@/components/Avatar/Avatar";

function Comment(props) {
  return (
    <article className="comment">
      <div className="comment__image-wrapper">
        <Avatar />
      </div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__text comment__text--bold">{props.name}</p>
          <p className="comment__text comment__text--light">{props.timestamp}</p>
        </div>
        <div className="comment__body">
          <p className="comment__text">{props.content}</p>
        </div>
      </div>
    </article>
  )
};

export default Comment;
