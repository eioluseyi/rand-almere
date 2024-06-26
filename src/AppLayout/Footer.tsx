"use client";

import React from "react";
import Logo from "@Icon/Logo";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-white pt-44 pb-24 gray-100">
      <div className="gap-4 grid grid-cols-3 sm:grid-cols-12 grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col mx-auto px-6 sm:px-8 lg:px-16 w-full max-w-screen-xl">
        <div className="flex flex-col items-start sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 row-span-2">
          <Logo />
          <p className="mb-4 text-pretty">
            Rand<b>Almere</b> is your one-stop shop for planning the perfect
            Almere trip.
          </p>
          <div className="flex -mx-2 mt-2 mb-8 w-full">
            <div className="flex justify-center items-center bg-white shadow-md mx-2 p-2 rounded-full">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <div className="flex justify-center items-center bg-white shadow-md mx-2 p-2 rounded-full">
              <TwitterIcon className="w-6 h-6" />
            </div>
            <div className="flex justify-center items-center bg-white shadow-md mx-2 p-2 rounded-full">
              <InstagramIcon className="w-6 h-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Rand Almere
          </p>
        </div>
        <div className="flex flex-col sm:col-span-2 sm:col-start-7 sm:col-end-9 row-span-2">
          <p className="mb-4 font-medium text-black text-lg">Product</p>
          <ul className="text-textLight">
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Plan{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Locations{" "}
            </li>
            {/* <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Server{" "}
            </li> */}
            {/* <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Countries{" "}
            </li> */}
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11 row-span-2">
          <p className="mb-4 font-medium text-black text-lg">Engage</p>
          <ul className="text-textLight">
            {/* <li className="my-2 hover:text-primary transition-all cursor-pointer">
              LaslesVPN ?{" "}
            </li> */}
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13 row-span-2">
          <p className="mb-4 font-medium text-black text-lg">Earn Money</p>
          <ul className="text-textLight">
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-primary transition-all cursor-pointer">
              Become a Member{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
