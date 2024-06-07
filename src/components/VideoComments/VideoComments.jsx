/* LOGIC */
import useQuickSort from "@/utils/hooks/useQuickSort";

/* STYLES */
import "./VideoComments.scss";

/* COMPONENTS */
import AddComment from "@/components/AddComment/AddComment";
import Comment from "@/components/Comment/Comment";

function VideoComments({ comments, getVideo }) {

  let sortedComments = useQuickSort(comments);

  return (
    <section className="video-comments">
      <p className="video-comments__text video-comments__text--bold">{comments.length === 1 ? `${comments.length} comment` : `${comments.length} comments`}</p>
      <AddComment getVideo={getVideo} />
      {sortedComments.map(comment => {
        return <Comment key={comment.id} name={comment.name} timestamp={comment.timestamp} content={comment.comment} />
      })}
    </section>
  );

};

export default VideoComments;
