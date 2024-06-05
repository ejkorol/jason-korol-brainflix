/* CUSTOM HOOK */
import useVideos from "@/utils/hooks/useVideos";

/* STYLES */
import "./HomePage.scss";

/* COMPONENTS */
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoContent from "@/components/VideoContent/VideoContent";

function HomePage() {

  const { video, videos, loading, error } = useVideos();

  if (loading) return <p>loading...</p>

  if (error) return <p>There was an error: {error}</p>

  return (
    <>
      <VideoPlayer video={video} />
      <VideoContent video={video} videoList={videos} />
    </>
  )
}

export default HomePage;
