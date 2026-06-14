"use client";

import Image from "next/image";
import {
  heroPhoto,
  businessExterior,
  infoCards,
  navBarDogOne,
  dogMosaic,
} from "./_data/photos";
import FadeInSection from "./_components/Fade_In_Section";
import Responsive_Image_Layout from "./_components/Responsive_Image_Layout";

import styles from "./_styling/landing_page.module.css";

function InfoCard() {
  return (
    <FadeInSection>
      <div className={styles.info_section}>
        {infoCards.map(({ id, header, copy, copy_two, icon }) => (
          <div key={id} className={styles.info_card}>
            <Image
              src={icon.src}
              height={icon.height}
              width={icon.width}
              alt={icon.alt}
              className={styles.icon}
            />
            <div className={styles.copy}>
              <p className={styles.title}>{header}</p>
              <p>{copy}</p>
              <p className={styles.copy_two}>{copy_two}</p>
            </div>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

export default function Home() {
  return (
    <main>
      <Responsive_Image_Layout photoData={heroPhoto} />
      <div className={styles.copy_section} id={styles.tag_line}>
        <p>
          Come for the baths,
          <br />
          Stay for the vibes.
        </p>
      </div>
      <Responsive_Image_Layout photoData={businessExterior} />
      <div className={styles.copy_section} id={styles.copy_section_blk}>
        <div className={styles.info_headline}>
          <h2 className={styles.info_header}>We have the</h2>
          <div className={styles.best_sh}>
            <h2 className={styles.info_header} id={styles.word_space}>
              best sh
            </h2>
            <Image
              src={navBarDogOne.src}
              height={navBarDogOne.height}
              width={navBarDogOne.width}
              alt={navBarDogOne.alt}
              className={styles.dog_icon}
            />
            <h2 className={styles.info_header}>t...</h2>
          </div>
        </div>
        <InfoCard />
      </div>
      <div className={styles.copy_section} id={styles.ig_section}>
        <a
          href="https://www.instagram.com/the.pet.bodega/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ig_link}
        >
          @the.pet.bodgea
        </a>
      </div>
      <Image
        src={dogMosaic.src}
        height={dogMosaic.height}
        width={dogMosaic.width}
        alt={dogMosaic.alt}
        className={styles.dog_mosaic}
      />
    </main>
  );
}
