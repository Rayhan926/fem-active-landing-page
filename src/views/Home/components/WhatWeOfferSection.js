import React from "react";
import ClockIcon from "../../../components/Icons/ClockIcon";
import GymMembershipIcon from "../../../components/Icons/GymMembershipIcon";
import SportsEvents from "../../../components/Icons/SportsEvents";
import SportVenues from "../../../components/Icons/SportVenues";

const cards = [
  {
    icon: <GymMembershipIcon />,
    title: "Gym Memberships",
    description: "Whether to be 1 day passes or 1 year memberships.",
  },
  {
    icon: <SportVenues />,
    title: "Sport Venues",
    description: "Football fields, tennis courts, golf courses, etc..",
  },
  {
    icon: <ClockIcon />,
    title: "Fitness Classes",
    description: "Yoga, pilates, boxing, crossfit, etc...",
  },
  {
    icon: <SportsEvents />,
    title: "Sports Events",
    description:
      "Detaild calender of all the sports events happening in the UAE.",
  },
];
const WhatWeOfferSection = () => {
  return (
    <section className="pt-20 bg-cream-white" id="what-we-offer">
      <div className="container">
        <h2 className="text-[32px] font-bold text-dark-blue text-center">
          What we offer?
        </h2>

        <div className="mt-[90px] flex">
          {cards.map(({ description, icon, title }, i) => (
            <div key={i} className="grow w-1/4 pl-8 first:pl-0">
              <div className="h-[67px]">{icon}</div>
              <h4 className="text-xl mt-[60px] font-bold text-dark-blue">
                {title}
              </h4>
              <p className="text-dark-blue text-[16px] mt-4 leading-[26px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
