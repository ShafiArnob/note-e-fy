import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import AddPage from "../components/AddPage";
import { projectAuth } from "../firebase/config";

const Navbar = () => {
  const [user] = useAuthState(projectAuth)
  const [signOut, loading, error] = useSignOut(projectAuth);
  // console.log(user);

  const handleLogout = async() => {
      const success = await signOut();

      if (success) {
        alert('You are signed out');
      }
    }
  return (
    <nav className="bg-neutral-900 p-4 flex justify-between items-center">
      <Link to="/" className="text-white font-bold text-2xl">
        note<span className="mx-0.5">·​</span>​e<span className="mx-0.5">·​</span>​fy
      </Link>

      <div className="flex items-center space-x-5">


        {user ? <p className="text-green-400">({user.displayName})</p>:""}
        <AddPage/>
        <Link href="#" className="text-white" onClick={() => handleLogout()}>
          <p className="mr-6">Logout</p>
        </Link>
      </div>
    </nav>
  );
};



export default Navbar