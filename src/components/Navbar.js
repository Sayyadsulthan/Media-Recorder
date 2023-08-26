import { Link } from "react-router-dom";
import { useAuth } from "../hooks";
import { toast } from "react-toastify";

function Navbar() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    toast.success("You are logged out..");
  };
  return (
    <div className="navbar-wrapper">
      <div className="left">
        {auth.user ? (
          auth.user.name ? (
            <span>{auth.user.name}</span>
          ) : (
            <span>{auth.user.email}</span>
          )
        ) : (
          ""
        )}
      </div>
      <div className="right">
        {auth.user ? (
          <button onClick={handleLogout}>Logut</button>
        ) : (
          <>
            <Link to="/login">
              <button>login</button>
            </Link>
            <Link to="/signup">
              <button>signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
