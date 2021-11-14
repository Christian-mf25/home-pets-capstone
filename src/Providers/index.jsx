import { LoginProvider } from "./Login";
import { RegisterAPetProvider } from "./RegisterAPet";
import { RegisterProvider } from "./Register";
import { UsersProvider } from "./GetUsers";
const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <RegisterAPetProvider>
            <UsersProvider>{children}</UsersProvider>
          </RegisterAPetProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
