import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useVideos from "@/utils/hooks/useVideos";

/* STYLES */
import "./HomePage.scss";

/* COMPONENTS */
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoContent from "@/components/VideoContent/VideoContent";

function HomePage() {

  const { id } = useParams();
  const { video, videos, loading, error, getVideo } = useVideos();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getVideo(id);
    } else {
      navigate("/");
    };
  }, [id]);

  console.log(id);
  console.log(videos);

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
