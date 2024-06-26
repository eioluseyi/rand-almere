import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@Util/getScrollAnimation";
import Image from "next/image";

const Network = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="flex flex-col my-16 w-full">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="mx-auto w-9/12 sm:w-6/12 lg:w-4/12 font-medium text-2xl text-black sm:text-3xl lg:text-4xl leading-relaxed"
        >
          Huge Global Network of Fast VPN{" "}
        </motion.h3>
        <motion.p
          className="mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 leading-normal"
          variants={scrollAnimation}
        >
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="mt-16 px-8 py-12 w-full"
          variants={scrollAnimation}
        >
          <Image
            src={"/assets/images/home/map.svg"}
            alt="map image"
            width={900}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-wrap lg:flex-nowrap justify-evenly items-center mt-4 w-full"
          variants={scrollAnimation}
        >
          {/* <Netflix className="w-auto h-18" /> */}
          <img
            src="/assets/Icon/amazon.png"
            className="mt-4 lg:mt-2 w-auto h-14"
            alt=""
          />
          <img
            src="/assets/Icon/netflix.png"
            className="mt-2 lg:mt-0 w-auto h-14"
            alt=""
          />
          <img
            src="/assets/Icon/reddit.png"
            className="mt-2 lg:mt-0 w-auto h-12"
            alt=""
          />
          <img
            src="/assets/Icon/discord.png"
            className="mt-2 lg:mt-0 w-auto h-14"
            alt=""
          />
          <img
            src="/assets/Icon/spotify.png"
            className="mt-2 lg:mt-0 w-auto h-12"
            alt=""
          />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Network;
