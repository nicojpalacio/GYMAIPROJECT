import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";

const DesktopMenu = ({ session, navbar, setNavbar }) => (
  <div>
    <div
      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        navbar ? "p-12 md:p-0 block" : "hidden"
      }`}
    >
      <ul className="h-screen md:h-auto items-center justify-center md:flex">
        {!session?.user ? (
          <GuestMenu setNavbar={setNavbar} />
        ) : (
          <UserMenu setNavbar={setNavbar} />
        )}
      </ul>
    </div>
  </div>
);

export default DesktopMenu;
