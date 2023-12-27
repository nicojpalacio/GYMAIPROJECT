import { RiMenuFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

const MobileMenuButton = ({ onClick, isOpen }) => (
  <div className="md:hidden">
    <button
      title="Menu button"
      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border left-0"
      onClick={onClick}
    >
      {isOpen ? (
        <IoCloseCircle size={24} className="text-white" />
      ) : (
        <RiMenuFill size={24} className="text-white" />
      )}
    </button>
  </div>
);

export default MobileMenuButton;
