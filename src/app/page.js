"use client";

import { heroPhoto, businessExterior } from "./_data/photos";
import FadeInSection from "./_components/Fade_In_Section";
import Responsive_Image_Layout from "./_components/Responsive_Image_Layout";
import Contact_Form from "./_components/forms/Contact_Form";

import styles from "./_styling/landing_page.module.css";

export default function Home() {
  return (
    <main>
      <FadeInSection>
        <div className={styles.image_container}>
          <Responsive_Image_Layout photoData={heroPhoto} />
        </div>
        <div className={styles.copy_section}>
          <p>Come for the baths,</p>
          <p>Stay for the vibes.</p>
        </div>
        <div className={styles.image_container}>
          <Responsive_Image_Layout photoData={businessExterior} />
        </div>

        <Contact_Form />
      </FadeInSection>
    </main>
  );
}
