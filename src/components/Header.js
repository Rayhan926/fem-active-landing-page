import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const navLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About us",
    url: "#why",
  },
  {
    text: "What we offer",
    url: "#what-we-offer",
  },
  {
    text: "Contact us",
    url: "#contact",
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className="py-8 absolute top-0 left-0 w-full z-50">
      <div className="container flex items-center">
        {/* Logo --Start-- */}
        <div>
          <Link href={"/"}>
            <a>
              <Image
                width={34}
                height={46}
                quality={100}
                src="/img/darklogo.png"
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Logo --End-- */}

        <nav>
          <ul className="flex items-center gap-8 ml-20">
            {navLinks.map((link, i) => {
              const isActive = router.pathname === link.url;
              return (
                <li key={i}>
                  <Link href={link.url}>
                    <a
                      className={`${
                        isActive ? "text-dark-blue" : "text-[#BD6F64]"
                      } font-medium text-sm relative`}
                    >
                      {link.text}

                      {isActive && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+5px)] w-1 h-1 rounded-full bg-dark-blue"></div>
                      )}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
