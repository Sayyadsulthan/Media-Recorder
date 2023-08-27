import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const ScreenRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ screen: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("mediaTag");
    if (data) {
      setIsVisible(true);
    }
  }, []);

  const handleStore = async () => {
    await mediaBlobUrl;
    if (mediaBlobUrl) {
      setIsVisible(true);
      localStorage.setItem(
        "mediaTag",
        typeof mediaBlobUrl ? mediaBlobUrl : JSON.stringify(mediaBlobUrl)
      );
    }
  };
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
          src={mediaBlobUrl ? mediaBlobUrl : localStorage.getItem("screenTag")}
          controls
          autoPlay
        />
      )}
    </div>
  );
};

export default ScreenRc;
