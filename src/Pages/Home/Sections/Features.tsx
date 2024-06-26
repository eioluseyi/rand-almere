import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@Util/getScrollAnimation";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const Features = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto mt-8 sm:mt-14 mb-6 sm:mb-14 px-6 sm:px-8 lg:px-16 max-w-screen-xl"
      id="feature"
    >
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 grid-flow-row sm:grid-flow-col my-12 p y-8">
        <ScrollAnimationWrapper className="flex justify-end w-full">
          <motion.div className="p-4 w-full h-full" variants={scrollAnimation}>
            <Image
              src="/assets/images/home/hero.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col justify-center items-end ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="font-medium text-3xl text-black lg:text-4xl leading-relaxed">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-black">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="ml-8 text-black list-inside self-start">
              {features.map((feature, index) => (
                <motion.li
                  className="relative custom-list circle-check"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Features;
