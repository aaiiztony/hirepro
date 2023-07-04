
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import UserInfo from './UserInfo'
const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  return (
  <>
  <button onClick={() => loginWithRedirect()} className="bg-accent hover:bg-secondary w-full sm:w-[80px] rounded mt-2 py-1">Log In</button>
  <LogoutButton/>
  <UserInfo/>
  </>)
};


export default LoginAuth0