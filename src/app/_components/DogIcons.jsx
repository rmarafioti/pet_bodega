"use client";

import Image from "next/image";

import { navBarDogOne, navBarDogTwo } from "../_data/photos";

import styles from "../_styling/dog_icons.module.css";

export default function DogIcons() {
  return (
    <div className={styles.dog_icon_container}>
      <Image
        src={navBarDogOne.src}
        height={navBarDogOne.height}
        width={navBarDogOne.width}
        alt={navBarDogOne.alt}
        className={styles.dog_icon_left}
      />
      <Image
        src={navBarDogTwo.src}
        height={navBarDogTwo.height}
        width={navBarDogTwo.width}
        alt={navBarDogTwo.alt}
        className={styles.dog_icon_left}
      />
    </div>
  );
}
