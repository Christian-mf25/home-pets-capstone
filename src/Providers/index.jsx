import { LoginProvider } from "./Login";
import { RegisterAPetProvider } from "./RegisterAPet";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <RegisterAPetProvider>{children}</RegisterAPetProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
