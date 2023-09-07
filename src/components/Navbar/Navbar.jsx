import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo2, logo2Purple, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // For setting the scrolled state
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate the opacity based on scroll
      let opacityValue = 1 - scrollTop / (documentHeight - viewportHeight);
      if (opacityValue < 0) opacityValue = 0;
      if (opacityValue > 1) opacityValue = 1;
      setLogoOpacity(opacityValue);
    };

    window.addEventListener("scroll", handleScroll);

    const target = document.getElementById("targetSection");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLogoOpacity(0);
        } else {
          setLogoOpacity(1);
        }
      },
      { threshold: 0.1 },
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-9 h-9">
            <img
              src={logo2Purple}
              alt="logo"
              className="absolute top-0 left-0 w-full h-full object-contain logo-transition"
            />
            <img
              src={logo2}
              alt="logo"
              style={{ opacity: logoOpacity }}
              className="absolute top-0 left-0 w-full h-full object-contain logo-transition"
            />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Christopher Beards
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
