import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import { GlobalStyles } from "./Styles/global";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </div>
  );
}

export default App;
