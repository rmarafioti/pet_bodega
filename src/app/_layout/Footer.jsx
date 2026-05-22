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
        <div className={styles.info}>
          <p>The Pet Bodega</p>
          <p>109 E Prospect Ave, Mt Prospect, IL 60056</p>
          <p>(847) 222-8005</p>
          <p>@the.pet.bodega</p>
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
