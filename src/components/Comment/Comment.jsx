/* LOGIC */
import { useState } from "react";
import useVerboiseTime from "@/utils/hooks/useVerboiseTime";

/* STYLES */
import "./Comment.scss";

/* COMPONENTS */
import Avatar from "@/components/Avatar/Avatar";

function Comment({ name, timestamp, content }) {

  let verboiseTime = useVerboiseTime(timestamp);

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
      </div>
    </article>
  );

};

export default Comment;
