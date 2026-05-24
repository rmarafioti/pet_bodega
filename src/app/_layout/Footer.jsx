"use client";

import Image from "next/image";
import { footerImage } from "../_data/photos";

import styles from "../_styling/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Image
        src={footerImage.src}
        height={footerImage.height}
        width={footerImage.width}
        alt={footerImage.alt}
        className={styles.footer_banner}
      />
      <div className={styles.info_container}>
        <div className={styles.links}>
          <p className={styles.name}>The Pet Bodgea</p>
          <a
            href="https://share.google/NzzMfuacDRT21yZvV"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.google_link}
          >
            109 E Prospect Ave, Mt Prospect, IL 60056
          </a>
          <a href="tel:+18472228005" className={styles.phone_number}>
            847.222.8005
          </a>
          <a
            href="https://www.instagram.com/the.pet.bodega/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ig_link}
          >
            @the.pet.bodgea
          </a>
        </div>
        <div className={styles.hours}>
          <p>Thurs: 9AM - 7PM</p>
          <p>Fri: 9AM - 7PM</p>
          <p>Sat: 9AM - 5PM</p>
          <p>Sun / Mon: Closed</p>
          <p>Tues: 9AM - 7PM</p>
          <p>Wed: 10AM - 7PM</p>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Marf Inc. All rights reserved.</p>
    </footer>
  );
}
