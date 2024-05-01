import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a className="text-sm font-bold hover:text-yellow-400 hover:bg-white">
          মূল পাতা
        </a>
      </li>

      <li>
        <a className="text-sm font-bold hover:text-yellow-400 hover:bg-white">
          আমাদের সম্পর্কে
        </a>
      </li>
      <li>
        <a className="text-sm font-bold hover:text-yellow-400 hover:bg-white">
          পাঠ্যধারাগুলি
        </a>
      </li>
      <li>
        <a className="text-sm font-bold hover:text-yellow-400 hover:bg-white">
          গ্যালারি
        </a>
      </li>
      <li>
        <a
          href="#our-books"
          className="text-sm font-bold hover:text-yellow-400 hover:bg-white"
        >
          আমাদের বইসমূহ
        </a>
      </li>
      {/* <li>
        <Link
          to="/test"
          className="text-sm font-bold hover:text-yellow-400 hover:bg-white"
        >
          অনলাইন টেস্ট
        </Link>
      </li> */}
      <li>
        <Link
          to="/onlineTest"
          className="text-sm font-bold hover:text-yellow-400 hover:bg-white"
        >
          অনলাইন টেস্ট
        </Link>
      </li>
      <li>
        <a className="text-sm font-bold hover:text-yellow-400 hover:bg-white">
          যোগাযোগ
        </a>
      </li>
    </>
  );
  return (
    <div className="md:px-[84px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
