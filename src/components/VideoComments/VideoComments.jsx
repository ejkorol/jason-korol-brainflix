/* STYLES */
import "./VideoComments.scss";

/* COMPONENTS */
import AddComment from "@/components/AddComment/AddComment";
import CommentsFeed from "@/components/CommentsFeed/CommentsFeed";

function VideoComments() {
  return (
    <section className="video-comments">
      <p>3 Comments</p>
      <AddComment />
      <CommentsFeed />
    </section>
  )
};

export default VideoComments;
