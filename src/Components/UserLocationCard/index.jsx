import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -23.84637, lng: -50.1886 }}
      />
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
