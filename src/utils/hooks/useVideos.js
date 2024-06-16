import { useState, useEffect } from "react";
import api from "@/utils/api/api";

function useVideos() {

  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDefaultVideo();
  }, []);

  async function getVideo(id) {
    try {
      const videos = await api.getVideoList();
      const video = await api.getVideo(id);
      const videoList = videos.filter(vid => vid.id !== video.id);
      setVideo(video);
      setVideos(videoList);
    } catch (e) {
      setError(e.message);
    };
  };

  async function getDefaultVideo() {
    try {
      const allVideos = await api.getVideoList();
      const video = await api.getVideo(allVideos[0].id);
      const videoList = allVideos.filter(vid => vid.id !== video.id);
      setVideo(video);
      setVideos(videoList)
    } catch (e) {
      setError(e.message);
    };
  };

  async function postVideo(payload) {
    try {
      const res = await api.postVideo(payload);
      return res.data;
    } catch (e) {
      setError(e.message);
    };
  };

  return { video, videos, error, getVideo, getDefaultVideo, postVideo };
};

export default useVideos;
