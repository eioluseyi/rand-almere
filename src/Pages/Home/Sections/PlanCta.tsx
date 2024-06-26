import { motion } from "framer-motion";
import ButtonPrimary from "@Component/Button/ButtonPrimary";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@Util/getScrollAnimation";
import Image from "next/image";

const PlanCta = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-50% from-transparent to-50% to-gray-100">
      <div className="relative mx-auto px-8 xl:px-16 max-w-screen-xl">
        <ScrollAnimationWrapper className="relative w-full">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="relative z-10 flex sm:flex-row flex-col justify-between items-center bg-white py-8 sm:py-14 pl-6 sm:pl-12 lg:pl-16 rounded-xl w-full sm:max-h-80 overflow-hidden">
              <div className="flex flex-col smmax:order-2 mb-6 sm:mb-0 w-10/12 sm:w-7/12 lg:w-5/12 text-left">
                <h5 className="font-medium text-black text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                  Plan Your Perfect
                  <br />
                  Almere <span className="text-primary">Adventure</span>
                </h5>
                <p>Customize your itinerary and explore with ease.</p>
                <ButtonPrimary addClass="w-fit mt-10">Let's Go!</ButtonPrimary>
              </div>
              <Image
                src={"/assets/images/home/plan-adventure.png"}
                alt="Plan Adventure"
                width={500}
                height={500}
                className="object-left-top flex-1 max-h-80 object-cover"
              />
            </div>
            <div
              className="-top-14 absolute inset-0 bg-black opacity-15 roudned-lg"
              style={{ filter: "blur(114px)" }}
            ></div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default PlanCta;
