"use client";

import Image from "next/image";
import {
  heroPhoto,
  businessExterior,
  infoCards,
  navBarDogOne,
} from "./_data/photos";
import Contact_Form from "./_components/forms/Contact_Form";
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
      <div className={styles.hero_tag}>
        <p>Come For The Bath,</p>
        <p>Stay For The Vibes</p>
      </div>
      <Responsive_Image_Layout photoData={heroPhoto} />
      <div className={styles.copy_section} id={styles.tag_line}>
        <p>
          Premium Food, Supplies,
          <br />
          and Grooming For Your Pup
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
      <Contact_Form />
    </main>
  );
}
