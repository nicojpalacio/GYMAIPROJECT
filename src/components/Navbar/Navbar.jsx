"use client";
import { useState } from "react";

import { useSession } from "next-auth/react";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const { data: session } = useSession();
  const [navbar, setNavbar] = useState(false);

  return (
    <div>

      <nav className="w-full bg-black md:bg-appOrange fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between px-4  lg:max-w-7xl lg:items-center  lg:px-8">

          <Logo />
          <DesktopMenu
            session={session}
            navbar={navbar}
            setNavbar={setNavbar}
          />

          <MobileMenuButton
            onClick={() => setNavbar(!navbar)}
            isOpen={navbar}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
