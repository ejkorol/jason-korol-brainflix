/* STYLES */
import "./VideoList.scss";

/* COMPONENTS */
import VideoSnippet from "@/components/VideoSnippet/VideoSnippet";

function createSnippet(video) {
  return <VideoSnippet image={video.image} title={video.title} author={video.channel} />
};

function VideoList(props) {

  const videos = props.videoList;

  return (
    <section className="video-list">
      <h3 className="video-list__header">next videos</h3>
      {videos.map(createSnippet)}
    </section>
  )
};

export default VideoList;
