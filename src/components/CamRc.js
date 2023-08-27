import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const CamRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ video: true });
  const [isVisible, setIsVisible] = useState(false);
  // if the mediabolbulr has value the set it src to local Storage
  const handleStore = async () => {
    await mediaBlobUrl;
    if (mediaBlobUrl)
      localStorage.setItem(
        "videoTag",
        typeof mediaBlobUrl ? mediaBlobUrl : JSON.stringify(mediaBlobUrl)
      );
  };

  useEffect(() => {
    const data = localStorage.getItem("videoTag");
    if (data) {
      setIsVisible(true);
    }
  }, []);
  return (
    <div className="video-wrapper">
      <p>{status === "idle" || status === "stopped" ? "" : status}</p>
      {status === "recording" ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button
          onClick={() => {
            startRecording();
            handleStore();
            if (error) {
              alert("Please Gave permission to record ");
            }
          }}
        >
          Start Recording
        </button>
      )}

      {isVisible && (
        <video
          src={mediaBlobUrl ? mediaBlobUrl : localStorage.getItem("videoTag")}
          controls
          autoPlay
        />
      )}
    </div>
  );
};
export default CamRc;
