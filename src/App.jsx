/* LOGIC */
import { useState } from "react";
import videoData from "@/data/video-details.json";

/* STYLES */
import './App.scss'

/* COMPONENTS */
import NavBar from "@/components/NavBar/NavBar";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoContent from "@/components/VideoContent/VideoContent";

function App() {

  const [video, setVideo] = useState(videoData[0]);
  const [videoList, setVideoList] = useState(videoData);

  return (
    <>
      <NavBar />
      <VideoPlayer video={video} />
      <VideoContent video={video} videoList={videoList} setVideo={setVideoList}/>
    </>
  )
}

export default App
