import React from "react";
import Pricing from "@Page/Home/Sections/Membership";
import Network from "@Page/Home/Sections/Network";
import Testimonials from "@Page/Home/Sections/Testimonials";

const DarkBgContent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-32 w-full">
      <div className="flex flex-col justify-center mx-auto px-6 sm:px-8 lg:px-16 w-full max-w-screen-xl text-center">
        <Pricing />
        {/* <Network />
        <Testimonials /> */}
      </div>
    </div>
  );
};

export default DarkBgContent;
