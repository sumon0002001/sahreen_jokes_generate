"use client";
import { logout } from "../logout/action";
const LogoutButton = () => {
  return <button onClick={() => logout()}>LogoutButton</button>;
};

export default LogoutButton;
