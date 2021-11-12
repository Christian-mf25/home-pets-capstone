import { LoginProvider } from "./Login";
import { RegisterAPetProvider } from "./RegisterAPet";

const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterAPetProvider>{children}</RegisterAPetProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
