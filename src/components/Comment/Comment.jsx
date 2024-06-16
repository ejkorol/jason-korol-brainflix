/* LOGIC */
import { useState } from "react";
import useVerboiseTime from "@/utils/hooks/useVerboiseTime";
import useComments from "@/utils/hooks/useComments";

/* STYLES */
import "./Comment.scss";
import heartIcon from "@/assets/icons/heart.svg";
import thumbsUpIcon from "@/assets/icons/thumbs-up.svg";
import trashIcon from "@/assets/icons/trash.svg";

/* COMPONENTS */
import Avatar from "@/components/Avatar/Avatar";

function Comment({ videoId, commentId, name, timestamp, content, likes, getVideo }) {

  let verboiseTime = useVerboiseTime(timestamp);
  const { deleteComment, likeComment, error } = useComments();

  const [time, setTime] = useState({
    timestamp: timestamp,
    verboiseTime: verboiseTime
  });

  setInterval(() => {
    setTime((prev) => ({
      ...prev,
      verboiseTime: useVerboiseTime(prev.timestamp)
    }));
  }, 60000);

  function handleLike() {
    likeComment(videoId, commentId);
    getVideo(videoId);
    if (error) {
      window.alert(error);
    };
  };

  function handleDelete() {
    deleteComment(videoId, commentId);
    getVideo(videoId);
    if (error) {
      window.alert(error);
    };
  };

  return (
    <article className="comment">
      <div className="comment__image-wrapper">
        <Avatar />
      </div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__text comment__text--bold">{name}</p>
          <p className="comment__text comment__text--light">{time.verboiseTime}</p>
        </div>
        <div className="comment__body">
          <p className="comment__text">{content}</p>
        </div>
        <div className="comment__bottom">
          <div className="comment__left">
            <img className="comment__icon" src={trashIcon} onClick={handleDelete} alt="delete comment" />
            <img className="comment__icon" src={thumbsUpIcon} onClick={handleLike} alt="like comment" />
          </div>
          <div className="comment__right">
            <p className="comment__text comment__text--light">{likes} {likes === 1 ? 'like' : 'likes'}</p>
          </div>
        </div>
      </div>
    </article>
  );

};

export default Comment;
