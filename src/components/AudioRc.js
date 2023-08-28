import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

const AudioRc = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ audio: true });

  return (
    <section className="audio-wrapper">
      <h1>Audio Record Section</h1>
      {/* <p className="show-message">{error && handleShowAlert}</p> */}
      <p>{status === "idle" || status === "stopped" ? "" : status}</p>
      {status === "recording" ? (
        <button
          className="stop-btn"
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
      {mediaBlobUrl && <audio src={mediaBlobUrl} controls autoPlay />}
    </section>
  );
};

export default AudioRc;
