/* STYLES */
import "./Video.scss";

/* DATA */
import videoData from "@/data/video-details.js";

function Video () {
  return (
    <video controls src={videoData[0].video} poster={videoData[0].image} className="video-player__video">
      <source src={videoData[0].video} type="video/mp4" controls />
      Your browser does not support the video element.
    </video>
  )
};

export default Video; 
