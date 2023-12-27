import Link from "next/link";
import { CgGym } from "react-icons/cg";
const Logo = () => (
  <div>
    <div className="flex items-center justify-between py-3 md:py-5 md:block">
      <Link title="Home-Page" href="/">
        {/* <h2 className="md:text-2xl text-cyan-800 font-bold ">LOGO</h2> */}
        <CgGym color="white" size="2em" className="md:text-2xl font-bold " />
      </Link>
    </div>
  </div>
);

export default Logo;
