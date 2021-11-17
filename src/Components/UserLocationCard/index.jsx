import { useEffect, useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  const [gotUsetLocation, setGotUsetLocation] = useState(false);
  const [userLat, setUserLat] = useState(0);
  const [userLng, setUsetLng] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLat(position.coords.latitude);
      setUsetLng(position.coords.longitude);
      setGotUsetLocation(true);
    });
  }, []);

  return (
    <>
      {gotUsetLocation && (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: userLat, lng: userLng }}
        />
      )}
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
