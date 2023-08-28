import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const CamRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ video: true });

  return (
    <div className="video-wrapper">
      <p>{status === "idle" || status === "stopped" ? "" : status}</p>
      {status === "recording" ? (
        <button
          onClick={() => {
            stopRecording();
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

      {mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay />}
    </div>
  );
};
export default CamRc;
