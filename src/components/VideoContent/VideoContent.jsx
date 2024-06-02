/* STYLES */
import "./VideoContent.scss";


/* COMPONENTS */
import VideoDetails from "@/components/VideoDetails/VideoDetails";
import VideoComments from "@/components/VideoComments/VideoComments";
import VideoList from "@/components/VideoList/VideoList";

function VideoContent () {
  return (
    <section className="video-content">
      <div className="video-content__left">
        <VideoDetails />
        <VideoComments />
      </div>
      <div className="video-content__right">
        <VideoList /> 
      </div>
    </section>
  )
};

export default VideoContent;
