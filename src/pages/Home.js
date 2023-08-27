// import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useState } from "react";
import AudioRc from "../components/AudioRc";
import CamRc from "../components/CamRc";

import ScreenRc from "../components/ScreenRc";
// import { useAuth } from "../hooks";

const Home = () => {
  const [isAudio, setIsAudio] = useState(false);
  const [isvideo, setIsVideo] = useState(false);
  const [isScreen, setIsScreen] = useState(false);

  /*
  useEffect(() => {
    const handlePermission = async () => {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((PermissionStatus) => {
          console.log("geolocation permission state:", PermissionStatus.state);

          PermissionStatus.onchange = () =>
            console.log("changed permission :", this.state);
        });

      Notification.requestPermission((result) => {
        if (result === "denied") {
          console.log("permission denied");
        } else if (result === "default") {
          console.log("request status :", result);
        } else {
          console.log("permission ", result);
        }
      });
    };
    handlePermission();
  }, []);

  */
  return (
    <div className="home-wrapper">
      {/* <button onClick={handlePermission}>gave permission</button> */}
      <div className="left-body">
        <div>
          <h1>Category :</h1>

          <ul className="main-tag-container">
            <li>
              <strong onClick={() => setIsAudio(!isAudio)}>Audio Record</strong>
            </li>
            <li>
              <strong onClick={() => setIsVideo(!isvideo)}>Video Record</strong>
            </li>
            <li>
              <strong onClick={() => setIsScreen(!isScreen)}>
                Screen Record
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-body">
        {isAudio && <AudioRc />}
        {isvideo && <CamRc />}
        {isScreen && <ScreenRc />}

        <h1>
          {isAudio || isScreen || isvideo
            ? ""
            : "Nothing here. To see the result click on left category"}
        </h1>
      </div>
    </div>
  );
};

export default Home;
