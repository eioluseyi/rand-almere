import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@Util/getScrollAnimation";
import ButtonPrimary from "@Component/Button/ButtonPrimary";

/* eslint-disable @next/next/no-img-element */
import InfiniteCarousel from "@Component/InfiniteCarousel";
import Image from "next/image";

const activities = [
  {
    imgSrc: "/assets/images/home/activity_culture.png",
    title: "Culture & History",
    subTitle: "Explore museums and art galleries",
  },
  {
    imgSrc: "/assets/images/home/activity_outdoor.png",
    title: "Outdoor Activities",
    subTitle: "Go for a hike or bike ride on scenic trails",
  },
  {
    imgSrc: "/assets/images/home/activity_food.png",
    title: "Food & Drinks",
    subTitle: "Sample local cuisine at restaurants",
  },
  {
    imgSrc: "/assets/images/home/activity_family.png",
    title: "Family Fun",
    subTitle: "Visit an amusement park, zoo, or aquarium",
  },
];

const ActivityCard = ({ imgSrc = "", title = "", subTitle = "" }) => (
  <div className="relative flex flex-col bg-gradient-to-b from-black/0 via-black/0 to-black px-5 pt-9 pb-4 border rounded-xl w-screen max-w-96 min-h-60 text-left text-white whitespace-normal overflow-hidden isolate">
    <Image
      src={imgSrc}
      alt={title}
      width={300}
      height={300}
      className="-z-10 absolute inset-0 w-full h-full mix-blend-multiply object-cover"
    />
    <h4 className="mt-auto font-bold text-lg">{title}</h4>
    <p className="text-sm">{subTitle}</p>
  </div>
);

const ActivityRow = () => (
  <div className="flex gap-5 whitespace-nowrap">
    {activities.map((itm, idx) => (
      <ActivityCard key={idx} {...itm} />
    ))}
  </div>
);

const Activities = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-40 max-w-screen-xl"
      id="activities"
    >
      <div className="flex flex-col w-full">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="mx-auto sm:w-9/12 font-medium text-2xl text-black text-center sm:text-3xl lg:text-4xl leading-normal"
          >
            Things to do around{" "}
            <span className="font-black text-primary">Almere</span>
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="mx-auto mt-4 mb-2 w-10/12 sm:w-7/12 lg:w-6/12 text-center text-textLight leading-normal"
          >
            Explore Almere's hidden gems and popular attractions with our
            curated list of things to do.
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex flex-col py-12 w-full">
          <motion.div variants={scrollAnimation}>
            <div className="relative gap-5 border-x_ grid py-5">
              <InfiniteCarousel gap="1.25rem">
                <ActivityRow />
              </InfiniteCarousel>
              <InfiniteCarousel gap="1.25rem" duration={100} reverse>
                <ActivityRow />
              </InfiniteCarousel>
              <div className="absolute bg-gradient-to-r from-black/40 to-black/0 w-4 h-full fade-y-10 mix-blend-multiply"></div>
              <div className="right-0 absolute bg-gradient-to-l from-black/40 to-black/0 w-4 h-full fade-y-10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        {/* <ScrollAnimationWrapper className="relative mt-16 w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="z-10 absolute flex sm:flex-row flex-col justify-between items-center bg-white px-6 sm:px-12 lg:px-16 py-8 sm:py-14 rounded-xl w-full">
            <div className="flex flex-col mb-6 sm:mb-0 w-10/12 sm:w-7/12 lg:w-5/12 text-left">
              <h5 className="font-medium text-black text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                Subscribe Now for <br /> Get Special Features!
              </h5>
              <p>Let's subscribe with us and find the fun.</p>
            </div>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div
            className="top-0 right-0 left-0 absolute bg-black opacity-5 mx-auto mt-8 w-11/12 h-60 sm:h-56 roudned-lg"
            style={{ filter: "blur(114px)" }}
          ></div>
        </motion.div>
      </ScrollAnimationWrapper> */}
      </div>
    </div>
  );
};

export default Activities;
