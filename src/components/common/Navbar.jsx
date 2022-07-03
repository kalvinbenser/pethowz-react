import React from "react";
import PetLogo from "../../assets/logo/pet.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#ff9a71]  ">
      <div className="flex justify-between p-4 items-center mx-auto mx-8">
        <div>
          <img src={PetLogo} className="h-[50px] cursor-pointer" alt="logo" />
        </div>
        <div>
          <ul className="flex text-white">
            <Link className="ml-4 cursor-pointer" to="/">
              Home
            </Link>
            <Link className="ml-4 cursor-pointer" to="/about">
              About Us
            </Link>
            <Link className="ml-4 cursor-pointer" to="/pethost">
              Pet Host
            </Link>
            <Link className="ml-4 cursor-pointer" to="/petservice">
              Service
            </Link>
            <Link className="ml-4 cursor-pointer" to="/petservice">
              Login
            </Link>
            <li className="ml-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </li>
            <li className="ml-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
