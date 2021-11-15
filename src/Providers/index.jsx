import { LoginProvider } from "./Login";
import { RegisterAPetProvider } from "./RegisterAPet";
import { RegisterProvider } from "./Register";
import { UsersProvider } from "./GetUsers";
import { PetsProvider } from "./GetPets";
const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <RegisterAPetProvider>
            <UsersProvider>
              <PetsProvider>{children}</PetsProvider>
            </UsersProvider>
          </RegisterAPetProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
