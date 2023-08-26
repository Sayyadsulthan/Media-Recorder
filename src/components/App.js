import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error from "./Error";
import { useAuth } from "../hooks";
import Navbar from "./Navbar";
import Loader from "./Loader";

const ProtectedRoute = ({ childrens, ...rest }) => {
  const auth = useAuth();
  // if the user authenticated go to that desired routes
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/home" Component={Home} />
          </Route>
          <Route exact path="/login" Component={Login} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" Component={Error} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
