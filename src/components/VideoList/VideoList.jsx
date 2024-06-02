/* STYLES */
import "./VideoList.scss";

/* COMPONENTS */
import VideoSnippet from "@/components/VideoSnippet/VideoSnippet";

function createSnippet(video) {
  return <VideoSnippet key={video.id} image={video.image} title={video.title} author={video.channel} />
};

function VideoList({ videoList, setVideo }) {

  const videos = videoList;

  return (
    <section className="video-list">
      <h3 className="video-list__header">next videos</h3>
      {videos.map(createSnippet)}
    </section>
  )
};

export default VideoList;
