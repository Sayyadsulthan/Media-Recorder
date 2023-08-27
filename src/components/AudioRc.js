import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const AudioRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ audio: true });
  const [isVisible, setIsVisible] = useState(false);
  // if the mediabolbulr has value the set it src to local Storage
  if (mediaBlobUrl)
    localStorage.setItem(
      "audioTag",
      typeof mediaBlobUrl ? mediaBlobUrl : JSON.stringify(mediaBlobUrl)
    );

  useEffect(() => {
    let data = localStorage.getItem("audioTag");
    if (data) {
      setIsVisible(true);
    }
  }, []);
  return (
    <section className="audio-wrapper">
      {/* <p className="show-message">{error && handleShowAlert}</p> */}
      <p>{status === "idle" || status === "stopped" ? "" : status}</p>
      {status === "recording" ? (
        <button
          onClick={() => {
            stopRecording();
            if (error) {
              alert("Please Gave permission to record ");
            }
          }}
        >
          Stop Recording
        </button>
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
        <audio
          src={mediaBlobUrl ? mediaBlobUrl : localStorage.getItem("audioTag")}
          controls
          autoPlay
        />
      )}
    </section>
  );
};

export default AudioRc;
