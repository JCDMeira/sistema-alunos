import React from "react";
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

// # Own files
import * as actions from "../../store/modules/auth/actions";
import history from "../../services/history";
// # Styles
import { Nav } from "./styled";

//@ Header com maiuscula
export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispach = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispach(actions.loginFailure());
    toast.success("Deslogado com sucesso.");
    history.push("/");
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      {!isLoggedIn ? (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      ) : (
        <Link onClick={handleLogout} to="/">
          <FaPowerOff size={24} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
    </Nav>
  );
}
