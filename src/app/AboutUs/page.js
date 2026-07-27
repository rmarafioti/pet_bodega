"use client";

import styles from "../_styling/about_us.module.css";

export default function AboutUs() {
  return (
    <main>
      <div className={styles.message_container}>
        <h1 className={styles.header}>About Us</h1>
        <p className={styles.message}>
          This page is in paw-gress, check back at a later dated.
        </p>
      </div>
    </main>
  );
}
