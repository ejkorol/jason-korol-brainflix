import "./VideoPlayer.scss";

/* COMPONENTS */
import Video from "@/components/Video/Video";
import VideoDetails from "@/components/VideoDetails/VideoDetails";

function VideoPlayer () {
  return (
    <section className="video-player">
      <Video />
      <VideoDetails />
    </section>
  )
};

export default VideoPlayer;
