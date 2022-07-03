import React from "react";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Mainpage from "./Mainpage";

function Welcome() {
  const [user] = useAuthState(auth);
  return user ? <Mainpage /> : <Login />;
}

export default Welcome;
