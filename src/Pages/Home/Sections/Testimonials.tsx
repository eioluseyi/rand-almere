import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@Util/getScrollAnimation";
import ButtonPrimary from "@Component/Button/ButtonPrimary";

/* eslint-disable @next/next/no-img-element */
import Container from "@Component/Container/Cards";
import InfiniteCarousel from "@Component/InfiniteCarousel";

const testimonials = [
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "Tolani Adekunle",
    title: "Account Officer, Wondrous hair",
    story:
      "It’s been great using Squad so far! All we do is share our payment details with customers and they make instant transfers to us using virtual account or SquadPOS.",
  },
  //   {
  //     avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  //     name: "Tolani Adekunle",
  //     title: "Account Officer, Wondrous hair",
  //     story:
  //       "It’s been great using Squad so far! All we do is share our payment details with customers and they make instant transfers to us using virtual account or SquadPOS.",
  //   },
  //   {
  //     avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  //     name: "Tolani Adekunle",
  //     title: "Account Officer, Wondrous hair",
  //     story:
  //       "It’s been great using Squad so far! All we do is share our payment details with customers and they make instant transfers to us using virtual account or SquadPOS.",
  //   },
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "Tolani Adekunle",
    title: "Account Officer, Wondrous hair",
    story:
      "It’s been great using Squad so far! All we do is share our payment details with customers and they make instant transfers to us using virtual account or SquadPOS.",
  },
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "Tolani Adekunle",
    title: "Account Officer, Wondrous hair",
    story:
      "It’s been great using Squad so far! All we do is share our payment details with customers and they make instant transfers to us using virtual account or SquadPOS.",
  },
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "Tolani Adekunle",
    title: "Account Officer, Wondrous hair",
    story:
      "It’s been great using Squad so far! All we do is share our payment details with customers and they make instant transfers to us using virtual account or SquadPOS.",
  },
];

const TestimonialCard = ({
  avatar = "",
  name = "",
  title = "",
  story = "",
}) => (
  <div className="[box-shadow:_0px_5px_10px_2px_rgba(0,_0,_0,_0.10) px-5 pt-9 pb-4 border rounded-xl w-screen max-w-96 text-left whitespace-normal">
    <div className="gap-x-4 gap-y-0.5 grid grid-cols-[auto_1fr] grid-rows-2">
      <img
        src={avatar}
        alt={name}
        className="row-span-2 rounded-full w-12 h-12 object-cover"
      />
      <h5 className="font-medium">{name}</h5>
      <h6 className="text-sm text-textGrey">{title}</h6>
    </div>
    <p className="mt-5 text-sm leading-5">“{story}”</p>
  </div>
);

const TestimonialRow = () => (
  <div className="flex gap-5 whitespace-nowrap">
    {testimonials.map((itm, idx) => (
      <TestimonialCard key={idx} {...itm} />
    ))}
  </div>
);

// export default function Testimonials() {
//   return (
//     <Container className="py-32">
//       <h3 className="mx-auto mb-5 max-w-3xl font-bold text-4xl text-center">
//         You’re in good company
//       </h3>
//       <p className="mb-14 text-center">
//         Thousands of businesses trust squad to make payments.
//       </p>
//       <div className="gap-5 grid fade-x-40">
//         <InfiniteCarousel gap="1.25rem">
//           <TestimonialRow />
//         </InfiniteCarousel>
//         <InfiniteCarousel gap="1.25rem" duration={100} reverse>
//           <TestimonialRow />
//         </InfiniteCarousel>
//       </div>
//     </Container>
//   );
// }

const Testimonials = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="flex flex-col my-16 w-full" id="testimonials">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="mx-auto w-9/12 lg:w-4/12 font-medium text-2xl text-black sm:text-3xl lg:text-4xl leading-normal sm:"
        >
          Trusted by Thousands of Happy Customer
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="mx-auto mt-4 mb-2 w-10/12 sm:w-7/12 lg:w-6/12 leading-normal"
        >
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex flex-col py-12 w-full">
        <motion.div variants={scrollAnimation}>
          <div className="gap-5 grid fade-x-40">
            <InfiniteCarousel gap="1.25rem">
              <TestimonialRow />
            </InfiniteCarousel>
            <InfiniteCarousel gap="1.25rem" duration={100} reverse>
              <TestimonialRow />
            </InfiniteCarousel>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="relative mt-16 w-full">
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
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Testimonials;
