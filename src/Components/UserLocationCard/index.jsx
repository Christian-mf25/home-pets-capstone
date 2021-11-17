import { useEffect, useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { LocationContainer } from "./styles";

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
    <LocationContainer>
      {gotUsetLocation && (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat: userLat, lng: userLng }}
        />
      )}
    </LocationContainer>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
