/* STYLES */
import "./Comment.scss";

/* COMPONENTS */
import Avatar from "@/components/Avatar/Avatar";

function Comment() {
  return (
    <article className="comment">
      <div className="comment__image-wrapper">
        <Avatar />
      </div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__text comment__text--bold">Jesus C</p>
          <p className="comment__text comment__text--light">8/11/2022</p>
        </div>
        <div className="comment__body">
          <p className="comment__text">Every we stray further from gods light. Every we stray further from gods light. Every we stray further from gods light. Every we stray further from gods light.</p>
        </div>
      </div>
    </article>
  )
};

export default Comment;
