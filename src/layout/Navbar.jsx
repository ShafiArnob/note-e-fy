import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 p-4 flex justify-between items-center">
      <Link to="/" className="text-white font-bold text-2xl">
        note<span className="mx-0.5">·​</span>​e<span className="mx-0.5">·​</span>​fy
      </Link>

      <div className="flex items-center">
        <Link to="/page" className="text-white mr-4">
          Page
        </Link>
        <Link href="#" className="text-white">
          Logout
        </Link>
      </div>
    </nav>
  );
};



export default Navbar