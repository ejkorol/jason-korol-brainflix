/* STYLES */
import "./VideoList.scss";

/* COMPONENTS */
import VideoSnippet from "@/components/VideoSnippet/VideoSnippet";

function VideoList() {
  return (
    <section className="video-list">
      <VideoSnippet />
    </section>
  )
};

export default VideoList;
