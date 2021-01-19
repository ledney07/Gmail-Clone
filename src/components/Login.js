import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import Logo from "../images/gmailLogo.jpg";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import "./Styles/Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt="Logo" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
