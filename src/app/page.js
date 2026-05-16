"use client";

import Image from "next/image";
import { heroPhoto, businessExterior, infoCards } from "./_data/photos";
import FadeInSection from "./_components/Fade_In_Section";
import Responsive_Image_Layout from "./_components/Responsive_Image_Layout";
import Contact_Form from "./_components/forms/Contact_Form";

import styles from "./_styling/landing_page.module.css";

function InfoCard() {
  return (
    <div className={styles.info_section}>
      {infoCards.map(({ id, header, copy, icon }) => (
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <FadeInSection>
        <div className={styles.image_container}>
          <Responsive_Image_Layout photoData={heroPhoto} />
        </div>
        <div className={styles.copy_section}>
          <h1>Come for the baths,</h1>
          <h1>Stay for the vibes.</h1>
        </div>
        <div className={styles.image_container}>
          <Responsive_Image_Layout photoData={businessExterior} />
        </div>
        <div className={styles.copy_section} id={styles.copy_section_blk}>
          <h2 className={styles.info_header}>We have the best shit...</h2>
          <InfoCard />
        </div>
        <div className={styles.copy_section}>
          <h3>@the.pet.bodgea</h3>
        </div>
        <div className={styles.copy_section} id={styles.copy_section_blk}>
          <p>next section</p>
        </div>
        {/*<Contact_Form />*/}
      </FadeInSection>
    </main>
  );
}
