import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "./Header";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark-blue">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-7">
          {/* Logo --Start-- */}
          <div>
            <Link href={"/"}>
              <a>
                <Image
                  width={34}
                  height={46}
                  quality={100}
                  src="/img/lightlogo.png"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          {/* Logo --End-- */}

          <p className="text-xs text-white font-extraligh tracking-[0.19em]">
            Copyright C 2022 FemActive. All rightd reserved.
          </p>
        </div>

        <nav>
          <ul className="flex gap-5">
            {navLinks.map(({ text, url }, i) => (
              <li key={i}>
                <Link href={url}>
                  <a className="text-sm font-semibold text-[#E8CCC8]">{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
