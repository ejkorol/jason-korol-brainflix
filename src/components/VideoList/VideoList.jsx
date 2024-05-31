/* STYLES */
import "./VideoList.scss";

/* COMPONENTS */
import VideoSnippet from "@/components/VideoSnippet/VideoSnippet";

function VideoList() {
  return (
    <section className="video-list">
      <h3 className="video-list__header">next videos</h3>
      <VideoSnippet />
    </section>
  )
};

export default VideoList;
