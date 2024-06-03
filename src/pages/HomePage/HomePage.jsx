/* LOGIC */
import { useState } from "react";
import videoData from "@/data/video-details.json";

/* STYLES */
import "./HomePage.scss";

/* COMPONENTS */
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoContent from "@/components/VideoContent/VideoContent";

function HomePage() {

  const [video, setVideo] = useState(videoData[0]);

  const videoList = videoData.filter(vid => vid.id !== video.id );

  return (
    <>
      <VideoPlayer video={video} />
      <VideoContent video={video} videoList={videoList} setVideo={setVideo}/>
    </>
  )
}

export default HomePage;
