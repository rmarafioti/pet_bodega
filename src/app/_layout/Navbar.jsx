"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navBarDogOne, navBarDogTwo, boneIcon } from "../_data/photos";

/* naming conventions to define responsive design*/
import pc from "../_styling/navbar.module.css";
import mobile from "../_styling/mobile_nav.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /*const links = [
    { href: "/", label: "Home" },
    { href: "/featureOne", label: "One" },
    { href: "/featureTwo", label: "Two" },
    { href: "/featureThree", label: "Three" },
  ];*/

  return (
    <>
      <nav>
        <Image
          src={navBarDogOne.src}
          height={navBarDogOne.height}
          width={navBarDogOne.width}
          alt={navBarDogOne.alt}
          className={pc.dog_icon}
        />
        <div className={pc.info_container}>
          <p className={pc.title}>The Pet Bodega</p>
          <div className={pc.information}>
            <p>Established 2021</p>
            <Image
              src={boneIcon.src}
              height={boneIcon.height}
              width={boneIcon.width}
              alt={boneIcon.alt}
              className={pc.bone_icon}
            />
            <p>Mount Prospect, IL.</p>
            <Image
              src={boneIcon.src}
              height={boneIcon.height}
              width={boneIcon.width}
              alt={boneIcon.alt}
              className={pc.bone_icon}
            />
            <a href="tel:+18472228005">847.222.8005</a>
          </div>
        </div>
        <Image
          src={navBarDogTwo.src}
          height={navBarDogTwo.height}
          width={navBarDogTwo.width}
          alt={navBarDogTwo.alt}
          className={pc.dog_icon}
        />
        {/*<div className={pc.link_container}>
          {links
            .filter((link) => link.href)
            .map(({ href, label }) => (
              <Link key={href} href={href} className={pc.nav_link}>
                {label}
              </Link>
            ))}
        </div>*/}

        {/* mobile navigation menu below */}
        <div className={pc.mobile_nav}>
          <Link href="/" className={pc.nav_link}>
            Home
          </Link>
          {/*hamburger menu*/}
          <div id={mobile.hamMenuContainer} onClick={toggleMenu}>
            <div
              className={`${mobile.menuButtonBurger} ${
                menuOpen ? mobile.open : ""
              }`}
            ></div>
          </div>
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
