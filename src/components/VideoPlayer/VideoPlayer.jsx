/* STYLES */
import "./VideoPlayer.scss";

function VideoPlayer ({ video }) {
  return (
    <section className="video-player">
      <video controls src={video.video} poster={video.image} className="video-player__video">
        <source src={video.video} type="video/mp4" controls />
        Your browser does not support the video element.
      </video>
    </section>
  )
};

export default VideoPlayer;
