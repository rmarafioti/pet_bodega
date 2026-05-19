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
      <p>&copy; {new Date().getFullYear()} Marf Inc. All rights reserved.</p>
    </footer>
  );
}
