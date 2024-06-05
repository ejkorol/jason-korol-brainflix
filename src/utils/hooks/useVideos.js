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
        const allVideos = await api.getVideoList();
        const video = await api.getVideo(allVideos[0].id);
        const videoList = allVideos.filter(vid => vid.id !== video.id);
        setVideo(video);
        setVideos(videoList)
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      };
    };
    fetchVideos();
  }, [])

  async function getVideo(id) {
    setLoading(true);
    try {
      const videos = await api.getVideoList();
      const video = await api.getVideo(id);
      const videoList = videos.filter(vid => vid.id !== video.id);
      setVideo(video);
      setVideos(videoList);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    };
  };

  return { video, videos, loading, error, getVideo };
};

export default useVideos;
