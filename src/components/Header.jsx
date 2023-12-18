import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <>

      <header className="top-0 left-0 w-full p-2 mx-auto ">
        <div className="flex items-center justify-between ">

          <section>
            <Navbar />
          </section>
      </div>
      </header>
    </>
  );
};
export default Header;
