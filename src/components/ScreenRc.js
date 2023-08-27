import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const ScreenRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ screen: true });
  const [isVisible, setIsVisible] = useState(false);

  if (mediaBlobUrl) {
    setIsVisible(true);
    localStorage.setItem(
      "mediaTag",
      typeof mediaBlobUrl ? mediaBlobUrl : JSON.stringify(mediaBlobUrl)
    );
  }
  useEffect(() => {
    let data = localStorage.getItem("mediaTag");
    if (data) {
      setIsVisible(true);
    }
  }, []);
  return (
    <div className="video-wrapper">
      <p className="show-message">
        {status === "idle" || status === "stopped" ? "" : status}
      </p>
      {status === "recording" ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button
          onClick={() => {
            startRecording();
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
          src={mediaBlobUrl ? mediaBlobUrl : localStorage.getItem("screenTag")}
          controls
          autoPlay
        />
      )}
    </div>
  );
};

export default ScreenRc;
