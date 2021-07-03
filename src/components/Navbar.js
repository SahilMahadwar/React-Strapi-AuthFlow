import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/test">Test</Link>
    </div>
  );
};

export default Navbar;

// {user && <Link to="/dashboard">Dashboard</Link>}
// {!user && (
//   <>
//     <Link to="/login">Login</Link>
//     <Link to="/signup">Signup</Link>
//   </>
// )}
