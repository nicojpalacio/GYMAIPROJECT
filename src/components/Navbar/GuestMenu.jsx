import Link from "next/link";

import { usePathname } from "next/navigation";

const LINKS = [
  {
    name: "SignUp",
    path: "/signup",
  },
  {
    name: "SignIn",
    path: "/signin",
  },
];

const GuestMenu = ({ setNavbar }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className=" md:flex md:gap-20 md:py-4">
        {LINKS.map(({ name, path }) => {
          const isActive = pathname === path;
          return (
            <li
              key={path}
              className={`text-3xl py-2 px-4 rounded-lg pb-6  text-center border-b-2 md:border-b-0  border-purple-900 md:hover:text-purple-600  ${
                isActive ? "bg-amber-600" : ""
              }`}
            >
              <Link href={path} onClick={() => setNavbar(false)}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default GuestMenu;
