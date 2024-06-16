/* LOGIC */
import useQuickSort from "@/utils/hooks/useQuickSort";

/* STYLES */
import "./VideoComments.scss";

/* COMPONENTS */
import AddComment from "@/components/AddComment/AddComment";
import Comment from "@/components/Comment/Comment";

function VideoComments({ video, comments, getVideo }) {

  let sortedComments = useQuickSort(comments);

  return (
    <section className="video-comments">
      <p className="video-comments__text video-comments__text--bold">{comments.length === 1 ? `${comments.length} comment` : `${comments.length} comments`}</p>
      <AddComment video={video} getVideo={getVideo} />
      {sortedComments.map(comment => {
        return <Comment key={comment.id} videoId={video.id} commentId={comment.id} name={comment.name} timestamp={comment.timestamp} content={comment.comment} likes={comment.likes} getVideo={getVideo} />
      })}
    </section>
  );

};

export default VideoComments;
