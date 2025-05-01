import React from "react";
import logo from "../../assets/log.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Consulting</a>
      </li>
      <li>
        <a>Ai Coach</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-10">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a>
          <img className="mr-10" src={logo} alt="" />
        </a>
        <ul className="hidden lg:flex gap-10">{links}</ul>
      </div>

      <div className="navbar-end">
        <a className="btn rounded-3xl text-lg border-2 border-black">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
