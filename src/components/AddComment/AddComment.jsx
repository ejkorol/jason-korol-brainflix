/* LOGIC */
import { useRef } from "react";
import { useParams } from "react-router-dom";
import useComments from "@/utils/hooks/useComments";

/* STYLES */
import "./AddComment.scss";
import userAvatar from "@/assets/images/Mohan-muruge.jpg"

/* ICONS */
import addCommentIcon from "@/assets/icons/add_comment.svg";

/* COMPONENTS */
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

function AddComment({ getVideo }) {

  const { id } = useParams();
  const { postComment } = useComments();
  const commentRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const userName = window.prompt("Enter your username: ", "");
    const comment = {
      name: userName,
      comment: commentRef.current.value
    };
    postComment(comment);
    getVideo(id);
  };

  return (
    <div className="add-comment">
      <div className="add-comment__image-wrapper">
        <Avatar image={userAvatar} />
      </div>
      <form className="add-comment__form" onSubmit={handleSubmit}>
        <div className="add-comment__wrapper add-comment__wrapper--textarea">
          <label className="add-comment__label">join the conversation</label>
          <textarea ref={commentRef} className="add-comment__textarea" placeholder="Add a new comment"></textarea>
        </div>
        <div className="add-comment__wrapper add-comment__wrapper--button">
          <Button icon={addCommentIcon} text="comment" type="submit" />
        </div>
      </form>
    </div>
  )
};

export default AddComment;
