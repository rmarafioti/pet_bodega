"use client";

import Image from "next/image";

import { dogBookEndOne, dogBookEndTwo } from "../_data/photos";

import styles from "../_styling/dog_icons.module.css";

export default function DogIcons() {
  return (
    <>
      <Image
        src={dogBookEndOne.src}
        height={dogBookEndOne.height}
        width={dogBookEndOne.width}
        alt={dogBookEndOne.alt}
        className={styles.dog_icon_left}
      />
      <Image
        src={dogBookEndTwo.src}
        height={dogBookEndTwo.height}
        width={dogBookEndTwo.width}
        alt={dogBookEndTwo.alt}
        className={styles.dog_icon_right}
      />
    </>
  );
}
