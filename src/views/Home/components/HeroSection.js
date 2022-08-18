import React from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const socialIcons = [
  {
    icon: <AiFillYoutube size={22} />,
    url: "#",
  },
  {
    icon: <FaTiktok size={22} />,
    url: "#",
  },
  {
    icon: <AiFillInstagram size={22} />,
    url: "#",
  },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream-white relative pb-24">
      <div className="container pt-[230px] flex justify-end relative">
        <img src="/img/hero_section_bg.png" alt="Hero Section" />

        <h1 className="text-[110px] font-semibold text-dark-blue absolute top-1/2 -translate-y-[15%] left-[45%] -translate-x-1/2 tracking-[0.09em]">
          FemActive
        </h1>

        <img
          src="/img/hero-image.png"
          alt="hero-image"
          className="absolute top-[35%] left-0"
        />
      </div>

      <div className="container mt-9">
        <div className="flex flex-col items-center text-center">
          <p className="text-dark-green tracking-[0.09em] text-xl">
            Your Trusted Directory of
          </p>
          <div className="mt-3">
            <h2 className="text-[48px] leading-[48px] tracking-[0.05em] font-extrabold text-dark-green">
              LADIES-ONLY
            </h2>
            <p className="reversed_text">LADIES-ONLY</p>
          </div>
          <p className="tetx-xl tracking-[0.36em] text-dark-blue mt-1.5">
            Classes | Memberships | Venues | Events
          </p>
        </div>
      </div>

      {/* Explore --Start-- */}
      <a
        href="#why"
        style={{
          bottom: 0,
          right: 0,
          transform: "rotate(90deg) translateX(-65%) translateY(-30px)",
        }}
        className="w-[218px] border-t-2 border-[#BD6F64] flex items-center gap-5 absolute pt-[9px] cursor-pointer"
      >
        <p className="text-sm text-dark-blue">EXPLORE</p>
        <div className="flex items-center w-[77px]">
          <div className="h-0.5 w-full bg-[#BD6F64]"></div>
          <div className="w-[7px] h-[7px] rounded-full bg-dark-blue"></div>
        </div>
      </a>
      {/* Explore --End-- */}

      {/* Social Icons --Start-- */}
      <div className="absolute bottom-[65px] left-10 space-y-[22px] text-[#CD948C] z-10">
        {socialIcons.map(({ icon, url }, i) => (
          <div key={i}>
            <a href={url} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </div>
        ))}
      </div>
      {/* Social Icons --End-- */}
    </section>
  );
};

export default HeroSection;
