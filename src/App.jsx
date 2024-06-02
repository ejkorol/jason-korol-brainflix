import './App.scss'

/* COMPONENTS */
import NavBar from "@/components/NavBar/NavBar";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoContent from "@/components/VideoContent/VideoContent";

function App() {

  return (
    <>
      <NavBar />
      <VideoPlayer />
      <VideoContent />
    </>
  )
}

export default App
