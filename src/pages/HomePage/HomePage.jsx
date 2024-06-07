import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useVideos from "@/utils/hooks/useVideos";

/* STYLES */
import "./HomePage.scss";

/* COMPONENTS */
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoContent from "@/components/VideoContent/VideoContent";

function HomePage() {

  const { id } = useParams();
  const { video, videos, error, getVideo, getDefaultVideo } = useVideos();

  useEffect(() => {
    if (id) {
      getVideo(id);
    } else {
      getDefaultVideo();
    };
  }, [id]);

  if (error) return <p>There was an error: {error}</p>;

  return (
    <>
      { video && <VideoPlayer video={video} /> }
      { video && <VideoContent video={video} videoList={videos} getVideo={getVideo} /> }
    </>
  )
}

export default HomePage;
