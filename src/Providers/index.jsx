import { LoginProvider } from "./Login";
import { RegisterAPetProvider } from "./RegisterAPet";
import { RegisterProvider } from "./Register";
import { UsersProvider } from "./GetUsers";
import { PetsProvider } from "./GetPets";
import { UpdateUserProfileProvider } from "./UdpateUser";
const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <RegisterAPetProvider>
            <UsersProvider>
              <PetsProvider>
                <UpdateUserProfileProvider>
                  {children}
                </UpdateUserProfileProvider>
              </PetsProvider>
            </UsersProvider>
          </RegisterAPetProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
