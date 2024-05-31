import "./VideoPlayer.scss";

/* COMPONENTS */
import Video from "@/components/Video/Video";
import VideoDetails from "@/components/VideoDetails/VideoDetails";
import VideoComments from "@/components/VideoComments/VideoComments";

function VideoPlayer () {
  return (
    <section className="video-player">
      <Video />
      <VideoDetails />
      <VideoComments />
    </section>
  )
};

export default VideoPlayer;
