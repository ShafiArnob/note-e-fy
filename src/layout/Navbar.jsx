import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { projectAuth } from "../firebase/config";

const Navbar = () => {
  const [user, loading, error] = useAuthState(projectAuth)
  // console.log(user);
  return (
    <nav className="bg-neutral-900 p-4 flex justify-between items-center">
      <Link to="/" className="text-white font-bold text-2xl">
        note<span className="mx-0.5">·​</span>​e<span className="mx-0.5">·​</span>​fy
      </Link>

      <div className="flex items-center">

        {user?<p className="text-green-400 mr-4">{user.displayName}</p>:""}

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