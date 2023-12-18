import { signOut } from "next-auth/react";

const Logout = () => {

  return <button className=" md:bg-red-600 md:hover:bg-red-100 md:hover:text-red-600 text-white px-4 md:py-2 md:rounded-xl" onClick={() => signOut()}>Logout</button>;

};
export default Logout;
