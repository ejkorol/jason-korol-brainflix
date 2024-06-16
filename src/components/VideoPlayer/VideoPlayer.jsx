/* LOGIC */
import { useState, useRef } from "react";

/* STYLES */
import "./VideoPlayer.scss";
import closeFullscreenIcon from "@/assets/icons/close_fullscreen.svg";
import openFullscreenIcon from "@/assets/icons/fullscreen.svg";
import playIcon from "@/assets/icons/play.svg";
import pauseIcon from "@/assets/icons/pause.svg";
import volumeUpIcon from "@/assets/icons/volume_up.svg";

const APIURL = import.meta.env.VITE_API_URL;

function VideoPlayer ({ video: { video, image, duration } }) {

  const [ play, setPlay ] = useState(false);
  const [ fullscreen, setFullscreen ] = useState(false);
  const videoRef = useRef(null);

  function handlePlay() {
    setPlay(!play);
  };

  function handleFullscreen() {
    setFullscreen(!fullscreen);
  };

  return (
    <section className="video-player">
      <video ref={videoRef} src={video} poster={`${APIURL}${image}`} className="video-player__video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video element.
      </video>

      <div className="video-player-controls">
        <div className="video-player-controls__left">
          <button className="video-player-controls__button" onClick={handlePlay} type="button">
            <img className="video-player-controls__icon" src={play ? pauseIcon : playIcon} alt="play" />
          </button>
        </div>
        <div className="video-player-controls__center">
          <progress className="video-player-controls__progress" value="0" min="0">
            <span className="video-player-controls__scrubber"></span>
          </progress>
          <p className="video-player-controls__text">{duration}</p>
        </div>
        <div className="video-player-controls__right">
          <button className="video-player-controls__button" onClick={handleFullscreen} type="button">
            <img className="video-player-controls__icon" src={fullscreen ? closeFullscreenIcon : openFullscreenIcon} alt="maximize" />
          </button>
          <button className="video-player-controls__button" type="button">
            <img className="video-player-controls__icon" src={volumeUpIcon} alt="volume up" />
          </button>
        </div>
      </div>

    </section>
  );

};

export default VideoPlayer;
