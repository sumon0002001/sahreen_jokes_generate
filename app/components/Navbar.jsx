import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center w-full">
        <ul className="flex space-x-4 justify-center items-center">
          <li>
            <Link className="hover:text-blue-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/saved-jokes">
              SavedJokes
            </Link>
          </li>
        </ul>
        <div>Logout/Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
