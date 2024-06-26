import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";
import Image from "next/image";
import ButtonOutline from "@Component/Button/ButtonOutline";
import { ReactNode, useMemo } from "react";
import getScrollAnimation from "@Util/getScrollAnimation";
import {
  BedIcon,
  CreditCard,
  DollarSign,
  Icon,
  WalletCards,
} from "lucide-react";

type PlanProps = { icon: ReactNode; title: string; features: string[] };
const MembershipPlan = ({ icon, title = "", features = [] }: PlanProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper className="flex justify-center">
      <motion.div
        variants={scrollAnimation}
        className="flex flex-col justify-center items-center border-gray-200 bg-white px-6 lg:px-12 xl:px-20 py-4 border rounded-xl"
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <div className="mt-6 lg:mt-16 p-4 lg:p-0 text-primary">{icon}</div>
        <h4 className="my-2 sm:my-7 font-medium text-primary text-xl capitalize">
          {title}
        </h4>
        <ul className="flex flex-col flex-grow justify-start items-start pl-6 xl:pl-0 text-black text-left list-inside">
          {features.map((itm, idx) => (
            <li
              key={idx}
              className="relative my-2 w-full text-center uppercase"
            >
              {itm}
            </li>
          ))}
        </ul>
        <div className="flex flex-col flex-none justify-center mt-12 mb-8 w-full">
          {/* <p className="mb-4 text-2xl text-black text-center">{title}</p> */}
          <ButtonOutline>Select</ButtonOutline>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

const plans = [
  {
    icon: <WalletCards />,
    title: "Free",
    features: ["Free trip planning", "Adverts", "Limited Tips"],
  },
  {
    icon: <CreditCard />,
    title: "Commuter",
    features: ["Free trip planning", "No Advert", "Premium Tips"],
  },
  {
    icon: <DollarSign />,
    title: "Premium",
    features: ["Commuter plans", "+", "24/7 support"],
  },
];

const Membership = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="membership" className="flex flex-col w-full">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="font-medium text-2xl text-black sm:text-3xl lg:text-4xl leading-relaxed"
        >
          Membership Plans
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 text-center leading-normal"
        >
          Choose the package that is best for you.
        </motion.p>
      </ScrollAnimationWrapper>
      <div className="gap-4 lg:gap-12 grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col px-6 sm:px-0 lg:px-6 py-8 lg:py-12">
        {plans.map((itm, idx) => (
          <MembershipPlan key={idx} {...itm} />
        ))}
      </div>
    </div>
  );
};

export default Membership;
