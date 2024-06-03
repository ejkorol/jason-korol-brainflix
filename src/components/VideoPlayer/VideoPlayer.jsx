/* STYLES */
import "./VideoPlayer.scss";

function VideoPlayer ({ video: { video, image } }) {
  return (
    <section className="video-player">
      <video controls src={video} poster={image} className="video-player__video">
        <source src={video} type="video/mp4" controls />
        Your browser does not support the video element.
      </video>
    </section>
  )
};

export default VideoPlayer;
