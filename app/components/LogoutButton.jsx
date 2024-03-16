"use client";
import { logout } from "../logout/action";
const LogoutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200 ease-in-out"
    >
      LogoutButton
    </button>
  );
};

export default LogoutButton;
