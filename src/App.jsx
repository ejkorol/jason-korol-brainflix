import './App.scss'

/* COMPONENTS */
import NavBar from "@/components/NavBar/NavBar";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoList from "@/components/VideoList/VideoList";

function App() {

  return (
    <>
      <NavBar />
      <VideoPlayer />
      <VideoList />
    </>
  )
}

export default App
