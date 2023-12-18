import Link from "next/link";
import Logout from "@/components/Logout";

import { usePathname } from "next/navigation";

const LINKS = [
  {
    name: "Download",
    path: "/downloadview",
  },
  {
    name: "Create",
    path: "/create",
  },
  {
    name: "Results",
    path: "/results",
  },
];

const UserMenu = ({ setNavbar }) => {
  const pathname = usePathname();
  return (
    <>
      <ul className=" md:flex md:gap-10 md:py-0">
        {LINKS.map(({ name, path }) => {
          const isActive = pathname === path;
          return (
            <li
              key={path}
              className={`mb-4 md:text-xl lg:text-2xl md:m-2 p-2 px-4 rounded-lg text-center border-b-2 md:border-b-0  border-purple-900 md:hover:text-purple-400  ${
                isActive ? "bg-amber-800" : ""
              }`}
            >
              <Link href={path} onClick={() => setNavbar(false)}>
                {name}
              </Link>
            </li>
          );
        })}
        <li className=" md:mt-0  md:text-xl lg:text-2xl py-2 px-4 text-center border-b-2 md:border-b-0  border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
          <Logout />
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
