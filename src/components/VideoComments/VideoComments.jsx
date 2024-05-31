/* STYLES */
import "./VideoComments.scss";

/* COMPONENTS */
import AddComment from "@/components/AddComment/AddComment";
import Comment from "@/components/Comment/Comment";

function VideoComments() {
  return (
    <section className="video-comments">
      <p className="video-comments__text video-comments__text--bold">3 Comments</p>
      <AddComment />
      <Comment />
    </section>
  )
};

export default VideoComments;
