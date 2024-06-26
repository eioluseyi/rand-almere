import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonPrimary from "@Component/Button/ButtonPrimary";
import getScrollAnimation from "@Util/getScrollAnimation";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";
import { Map, RollerCoaster, Sparkles } from "lucide-react";
import ButtonOutline from "@Component/Button/ButtonOutline";

const Hero = ({
  listUser = [
    {
      name: "Courses",
      number: "390",
      icon: <Map />,
    },
    {
      name: "Activities",
      number: "50",
      icon: <RollerCoaster />,
    },
    {
      name: "Highlights",
      number: "20",
      icon: <Sparkles />,
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto mt-24 scroll-mt-24 px-8 xl:px-16 max-w-screen-xl"
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="gap-8 grid sm:grid-cols-2 grid-flow-row sm:grid-flow-col py-4 sm:py-10"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="font-medium text-3xl text-black lg:text-4xl xl:text-5xl leading-normal">
              Explore Almere with
              <br />
              <b>
                <span className="text-primary">Rand</span>Almere
              </b>
            </h1>
            <p className="mt-4 mb-10 text-balance text-lg text-textLight">
              Travel like a local with insider tips and recommendations for your
              perfect trip.
            </p>
            <div className="flex flex-wrap *:smmax:flex-1 gap-3">
              <ButtonPrimary>Let's Go!</ButtonPrimary>
              <ButtonOutline>Explore Activities</ButtonOutline>
            </div>
          </div>
          <div className="sm:flex hidden w-full">
            <motion.div
              className="bg-primary_ w-full h-full"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/images/home/hero.png"
                alt="Travel story"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
                className="max-h-[30rem] object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative flex w-full">
        <ScrollAnimationWrapper className="z-10 grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-row bg-white py-9 rounded-lg sm:divide-x-2 divide-y-2 sm:divide-y-0 divide-gray-100 w-full">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex justify-start sm:justify-center items-center mx-auto sm:mx-0 px-4 py-4 sm:py-6 w-8/12 sm:w-auto"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex justify-center items-center bg-primary/10 mr-6 rounded-full w-12 h-12">
                  <span className="w-6 h-6 text-primary">{listUsers.icon}</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-black text-xl">
                    {listUsers.number}+
                  </p>
                  <p className="text-black text-lg">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="top-0 right-0 left-0 absolute bg-black opacity-5 mx-auto mt-8 w-11/12 h-64 sm:h-48 roudned-lg"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
