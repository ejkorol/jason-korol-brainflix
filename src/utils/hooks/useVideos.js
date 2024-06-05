import { useState, useEffect } from "react";
import api from "@/utils/api/api";

function useVideos() {

  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchVideos() {
      try {
        const defaultVideo = await api.getDefaultVideo();
        const allVideos = await api.getVideoList();
        const videoList = allVideos.filter(vid => vid.id !== defaultVideo.id);
        setVideo(defaultVideo);
        setVideos(videoList)
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      };
    };
    fetchVideos();
  }, [])

  return { video, videos, loading, error };
};

export default useVideos;
