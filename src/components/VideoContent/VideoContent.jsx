/* STYLES */
import "./VideoContent.scss";

/* COMPONENTS */
import VideoDetails from "@/components/VideoDetails/VideoDetails";
import VideoComments from "@/components/VideoComments/VideoComments";
import VideoList from "@/components/VideoList/VideoList";

function VideoContent ({ video, videoList, getVideo }) {

  return (
    <section className="video-content">
      <div className="video-content__left">
        <VideoDetails video={video} />
        <VideoComments comments={video.comments} getVideo={getVideo} />
      </div>

      <div className="video-content__right">
        <VideoList videoList={videoList} /> 
      </div>
    </section>
  );

};

export default VideoContent;
