/* STYLES */
import "./VideoList.scss";

/* COMPONENTS */
import VideoSnippet from "@/components/VideoSnippet/VideoSnippet";

function VideoList({ videoList, setVideo }) {

  function handleVideoChange(video) {
    console.log(video);
    setVideo(video);
  };

  return (
    <section className="video-list">
      <h3 className="video-list__header">next videos</h3>
      {videoList.map(video => {
        return <VideoSnippet onClick={() => handleVideoChange(video)} key={video.id} image={video.image} title={video.title} author={video.channel} id={video.id} />
      })}
    </section>
  )
};

export default VideoList;
