// import { Link } from "react-router-dom";
import { useEffect } from "react";
import AudioRc from "../components/AudioRc";
import CamRc from "../components/CamRc";
import ScreenRc from "../components/ScreenRc";
// import { useAuth } from "../hooks";

const Home = () => {
  //   const auth = useAuth();

  // console.log(auth)
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
  return (
    <div>
      {/* <button onClick={handlePermission}>gave permission</button> */}
      <AudioRc />
      <CamRc />
      <ScreenRc />
    </div>
  );
};

export default Home;
