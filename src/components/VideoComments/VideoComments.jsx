/* STYLES */
import "./VideoComments.scss";

/* COMPONENTS */
import AddComment from "@/components/AddComment/AddComment";
import Comment from "@/components/Comment/Comment";

function createComment(comment) {
  return <Comment name={comment.name} timestamp={comment.timestamp} content={comment.comment} />
};

function VideoComments(props) {

  const comments = props.video.comments;

  return (
    <section className="video-comments">
      <p className="video-comments__text video-comments__text--bold">{comments.length} comments</p>
      <AddComment />
      {comments.map(createComment)}
    </section>
  )
};

export default VideoComments;
