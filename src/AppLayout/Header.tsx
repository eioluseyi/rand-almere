"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Link as LinkScroll } from "react-scroll";
import Logo from "@Icon/Logo";
import ButtonOutline from "@Component/Button/ButtonOutline";
import { cn } from "@Util/shadcn";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);

  const linkList = [
    {
      to: "activities",
      title: "Activities",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-5 h-5"
        >
          <path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" />
        </svg>
      ),
      extraClasses: "",
    },
    {
      to: "planner",
      title: "Planner",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      extraClasses: "",
    },
    {
      to: "membership",
      title: "Membership",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      extraClasses: "",
    },
    {
      to: "blog",
      title: "Blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-5 h-5"
        >
          <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      ),
      extraClasses: "",
    },
    // {
    //   to: "contact",
    //   title: "Contact",
    //   icon: (
    //     <svg
    //       className="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    //       />
    //     </svg>
    //   ),
    //   extraClasses: "",
    // },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-30 bg-white transition-all",
          scrollActive ? "shadow-md pt-0" : "pt-4"
        )}
      >
        <nav className="grid grid-flow-col mx-auto px-6 sm:px-8 lg:px-16 py-3 sm:py-4 max-w-screen-xl">
          <LinkScroll
            to="home"
            spy={true}
            smooth={true}
            duration={100}
            onSetActive={() => {
              setActiveLink("home");
            }}
            className="flex items-center col-start-1 col-end-2 cursor-pointer"
          >
            <Logo textClassName="sm:inline hidden" />
          </LinkScroll>
          <ul className="lg:flex justify-center items-center hidden col-start-4 col-end-8 text-black">
            {linkList.map((itm, idx) => (
              <LinkScroll
                key={idx}
                activeClass="active"
                to={itm.to}
                spy={true}
                smooth={true}
                duration={100}
                onSetActive={() => {
                  setActiveLink(itm.to);
                }}
                className={cn(
                  "px-4 py-2 cursor-pointer whitespace-nowrap animation-hover inline-block relative text-black hover:text-primary",
                  activeLink === itm.to && "text-primary animation-active",
                  itm.extraClasses
                )}
              >
                {itm.title}
              </LinkScroll>
            ))}
          </ul>
          <div className="flex justify-end items-center col-start-10 col-end-12 font-medium">
            <Link
              href="/"
              className="mx-2 sm:mx-4 text-black hover:text-primary capitalize tracking-wide whitespace-nowrap transition-all"
            >
              Sign In
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="right-0 bottom-0 left-0 z-20 fixed lg:hidden bg-white/95 shadow-md [--tw-shadow:0_-4px_6px_-1px_rgb(0_0_0/0.1)] backdrop-blur-lg px-4 sm:px-8">
        <ul className="flex justify-between items-center w-full text-black">
          {linkList.map((itm, idx) => (
            <LinkScroll
              key={idx}
              activeClass="active"
              to={itm.to}
              spy={true}
              smooth={true}
              duration={100}
              onSetActive={() => {
                setActiveLink(itm.to);
              }}
              className={cn(
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all border-transparent",
                activeLink === itm.to && "border-primary text-primary",
                itm.extraClasses
              )}
            >
              {itm.icon}
              {itm.title}
            </LinkScroll>
          ))}
        </ul>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
