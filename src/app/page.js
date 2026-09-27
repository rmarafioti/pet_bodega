"use client";

import Image from "next/image";
import { heroPhoto, infoCards, navBarDogOne } from "./_data/photos";
import Photo_Gallery from "./_components/Photo_Gallery";
import Contact_Form from "./_components/forms/Contact_Form";
import FadeInSection from "./_components/Fade_In_Section";
import Responsive_Image_Layout from "./_components/Responsive_Image_Layout";

import styles from "./_styling/landing_page.module.css";

function InfoCard() {
  return (
    <FadeInSection>
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
    </FadeInSection>
  );
}

export default function Home() {
  return (
    <main>
      <Responsive_Image_Layout photoData={heroPhoto} />
      <div className={styles.copy_section} id={styles.tag_line}>
        <p>
          Come for the bath, Stay
          <br />
          For the vibes.
        </p>
      </div>
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
      <Photo_Gallery />
      <div className={styles.review_section}>
        <h2 className={styles.reviews_header}>Bodega Dog Parents Say...</h2>
        <div className={styles.reviews}>
          <p>
            <span className={styles.quote}>“</span>My dog came out looking so
            dapper and handsome, with his coat soft and shiny. I also loved that
            they used high-quality, gentle products that didn&apos;t irritate
            his sensitive skin.
            <span className={styles.quote}>”</span>
          </p>
          <p>
            <span className={styles.quote}>“</span>Great place with tons of
            goodies for your pups! Owner and employees are super nice and
            accommodating. Great location with lots of street parking. My dogs
            love all their new treats/toys and it seems like they have close
            relationships with local vendors. They have regular and self
            grooming options which is awesome, and convenient hours. Will
            definitely be back!<span className={styles.quote}>”</span>
          </p>
          <p>
            <span className={styles.quote}>“</span>Amazing place with everything
            you need for a seamless dog wash. Super helpful and kind. Also,
            there is a very extensive retail store with excellent product lines.
            Thanks from Lexi the German Shepherd!
            <span className={styles.quote}>”</span>
          </p>
        </div>
      </div>
      <Contact_Form />
    </main>
  );
}
