/* STYLES */
import "./AddComment.scss";
import userAvatar from "@/assets/images/Mohan-muruge.jpg"

/* ICONS */
import addCommentIcon from "@/assets/icons/add_comment.svg";

/* COMPONENTS */
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

function AddComment() {
  return (
    <div className="add-comment">
      <div className="add-comment__image-wrapper">
        <Avatar image={userAvatar} />
      </div>
      <form className="add-comment__form">
        <label className="add-comment__label">join the conversation</label>
        <textarea className="add-comment__textarea" placeholder="Add a new comment" rows="5"></textarea>
        <Button icon={addCommentIcon} text="comment" />
      </form>
    </div>
  )
};

export default AddComment;
