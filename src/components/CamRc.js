import { useReactMediaRecorder } from "react-media-recorder-2";

const CamRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ video: true });

  return (
    <div className="video-wrapper">
      {/* <p className="show-message">
        {error && "Please Gave permission to record "}
      </p> */}
      <p>{status === "idle" || status === "stopped" ? "" : status}</p>
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
      <video src={mediaBlobUrl} controls autoPlay />
    </div>
  );
};
export default CamRc;
