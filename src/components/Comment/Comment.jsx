/* LOGIC */
import { useState } from "react";

/* STYLES */
import "./Comment.scss";

/* COMPONENTS */
import Avatar from "@/components/Avatar/Avatar";

function Comment({ name, timestamp, content }) {

  const [time, setTime] = useState({
    timestamp: timestamp,
    verboiseTime: convertTimestamp(timestamp)
  });

  setInterval(() => {
    setTime((prev) => ({
      ...prev,
      verboiseTime: convertTimestamp(prev.timestamp)
    }));
  }, 60000)

  /* TIMESTAMP LOGIC */
  function convertTimestamp(time) {
    const dif = Date.now() - time;
    const seconds = Math.floor(dif / 1000);

    const timeUnits = [
      { unit: 'year', value: 31536000 },
      { unit: 'month', value: 2592000 },
      { unit: 'day', value: 86400 },
      { unit: 'hour', value: 3600 },
      { unit: 'minute', value: 60 }
    ];

    for (let i = 0; i < timeUnits.length; i++) {
      const unit = timeUnits[i].unit;
      const value = timeUnits[i].value;
      const elapsed = Math.floor(seconds / value);

      if (elapsed >= 1) {
        let unitStr = unit;
        if (elapsed > 1) {
          unitStr = unit + 's';
        };
        return elapsed + ' ' + unitStr + ' ago'
      };
    };
    return 'Just now'
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
      </div>
    </article>
  );

};

export default Comment;
