import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const CamRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ video: true });

  return (
    <div className="video-wrapper">
      <h1>Video Record Section</h1>
      <p>{status === "idle" || status === "stopped" ? "" : status}</p>
      {status === "recording" ? (
        <button
          className="stop-btn"
          onClick={() => {
            stopRecording();
          }}
        >
          Stop Recording
        </button>
      ) : (
        <button
          className="start-btn"
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

      {mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay />}
    </div>
  );
};
export default CamRc;
