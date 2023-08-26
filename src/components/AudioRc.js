import { useReactMediaRecorder } from "react-media-recorder-2";

const AudioRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ audio: true });

  return (
    <div className="audio-wrapper">
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
      <audio src={mediaBlobUrl} controls autoPlay />
    </div>
  );
};

export default AudioRc;
