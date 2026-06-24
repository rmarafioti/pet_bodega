"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  dogBookEndOne,
  dogBookEndTwo,
  boneIcon,
  two_box_header,
  one_box_header,
  navBarMobileDogTwo,
} from "../_data/photos";

/* naming conventions to define responsive design*/
import pc from "../_styling/navbar.module.css";
import mobile from "../_styling/mobile_nav.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.15); // 15% of viewport height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleClick(e) {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.includes("#")) return;

    const hash = href.split("#")[1];
    const targetSection = document.getElementById(hash);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${hash}`);
    }
  }

  const links = [
    { href: "/AboutUs", label: "about us" },
    { href: "/OurTeam", label: "meet our team" },
    { href: "/#contact_us", label: "contact us" },
  ];

  return (
    <>
      <nav>
        <div
          className={pc.base_navbar_container}
          style={isScrolled ? { display: "none" } : {}}
        >
          <Link href="/" className={pc.base_header}>
            <Image
              src={two_box_header.src}
              height={two_box_header.height}
              width={two_box_header.width}
              alt={two_box_header.alt}
              className={pc.two_box_header}
            />
            <Image
              src={dogBookEndOne.src}
              height={dogBookEndOne.height}
              width={dogBookEndOne.width}
              alt={dogBookEndOne.alt}
              className={pc.dog_icon_left}
            />
            <div className={pc.info_container}>
              <p className={pc.title}>The Pet Bodega</p>
              <p className={pc.information}>
                Grooming in Mount Prospect, IL Since 2021
              </p>
            </div>
            <Image
              src={dogBookEndTwo.src}
              height={dogBookEndTwo.height}
              width={dogBookEndTwo.width}
              alt={dogBookEndTwo.alt}
              className={pc.dog_icon_right}
            />
            <Image
              src={two_box_header.src}
              height={two_box_header.height}
              width={two_box_header.width}
              alt={two_box_header.alt}
              className={pc.two_box_header}
            />
          </Link>
          <div className={pc.link_container}>
            {links
              .filter((link) => link.href)
              .map(({ href, label }, index, array) => (
                <span key={href} className={pc.nav_link_group}>
                  <Link
                    href={href}
                    onClick={handleClick}
                    className={pc.nav_link}
                  >
                    {label}
                  </Link>
                  {index < array.length - 1 && (
                    <Image
                      src={boneIcon.src}
                      height={boneIcon.height}
                      width={boneIcon.width}
                      alt={boneIcon.alt}
                      className={pc.bone_icon}
                    />
                  )}
                </span>
              ))}
          </div>
        </div>

        {/* smaller nav bar for desktop view */}
        <div
          className={pc.small_nav_container}
          style={!isScrolled ? { display: "none" } : {}}
        >
          <div className={pc.small_nav_header}>
            <Image
              src={one_box_header.src}
              height={one_box_header.height}
              width={one_box_header.width}
              alt={one_box_header.alt}
              className={pc.one_box_header}
            />
            <p className={pc.title_small}>The Pet Bodega</p>
            <Image
              src={one_box_header.src}
              height={one_box_header.height}
              width={one_box_header.width}
              alt={one_box_header.alt}
              className={pc.one_box_header}
            />
          </div>
          <div className={pc.link_container}>
            {links
              .filter((link) => link.href)
              .map(({ href, label }, index, array) => (
                <span key={href} className={pc.nav_link_group}>
                  <Link key={href} href={href} className={pc.nav_link}>
                    {label}
                  </Link>
                  {index < array.length - 1 && (
                    <Image
                      src={boneIcon.src}
                      height={boneIcon.height}
                      width={boneIcon.width}
                      alt={boneIcon.alt}
                      className={pc.bone_icon}
                    />
                  )}
                </span>
              ))}
          </div>
        </div>

        {/* mobile navigation menu below */}
        <div className={pc.mobile_nav}>
          <div>
            <Image
              src={navBarMobileDogTwo.src}
              height={navBarMobileDogTwo.height}
              width={navBarMobileDogTwo.width}
              alt={navBarMobileDogTwo.alt}
              className={pc.navbar_mobile_dog_one}
            />
          </div>
          <button>
            <a href="tel:+18472228005" className={pc.book_now}>
              BOOK NOW
            </a>
          </button>
          {/*<Link href="/" className={pc.nav_link}>
            Home
          </Link>*/}
          {/*hamburger menu*/}
          {/*<div id={mobile.hamMenuContainer} onClick={toggleMenu}>
            <div
              className={`${mobile.menuButtonBurger} ${
                menuOpen ? mobile.open : ""
              }`}
            ></div>
          </div>*/}
        </div>
      </nav>

      {/* mobile menu */}
      {/*<menu
        className={`${pc.menu} ${menuOpen ? pc.active : ""}`}
        aria-label="Mobile Navigation"
      >
        {links
          .filter((link) => link.href !== "/")
          .map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              role="heading"
              className={mobile.nav_link}
            >
              {label}
            </Link>
          ))}
      </menu>*/}
    </>
  );
}
