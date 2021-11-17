import axios from "axios";
import { useHistory } from "react-router";
import GenericCard from "../../Components/GenericCard";
import WrappedMap from "../../Components/UserLocationCard";
import { HomeContainer } from "./styles";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const history = useHistory();

  if (!token) {
    history.push("/login");
  }

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
      +Mountain+View,+CA&key=AIzaSyCHH9rcwldwaOZ5T4nlmPd18FYx1PU5afg`
    )
    .then((res) => console.log(res));

  return (
    <HomeContainer>
      <div className="mapContainer">
        <h2>Você está aqui</h2>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCHH9rcwldwaOZ5T4nlmPd18FYx1PU5afg`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="cardsContainer">
        <GenericCard flag={true} name="ONGs" />
        <GenericCard flag={true} name="Empresas" />
        <GenericCard flag={true} name="Pessoas" />
      </div>
    </HomeContainer>
  );
};

export default Home;
