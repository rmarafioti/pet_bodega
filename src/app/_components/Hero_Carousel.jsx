"use client";

import React from "react";
import Image from "next/image";
import Responsive_Image_Layout from "./Responsive_Image_Layout";
import { heroCarousel } from "../_data/photos";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

import styles from "../_styling/hero_carousel.module.css";

export default function Hero_Carousel({
  onNext,
  onPrev,
  currentImageObj,
  currentIndex,
  photos,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  };

  return (
    <div onKeyDown={handleKeyDown} className={styles.section}>
      <Responsive_Image_Layout
        photoData={currentImageObj}
        className={styles.photo}
      />
      <button
        type="button"
        className={`${styles.gallery_button} ${styles.prev_button}`}
        onClick={onPrev}
        aria-label="previous photo"
      >
        <IoIosArrowBack />
      </button>
      <button
        type="button"
        className={`${styles.gallery_button} ${styles.next_button}`}
        onClick={onNext}
        aria-label="next photo"
      >
        <IoIosArrowForward />
      </button>

      <div className={styles.indicators}>
        {heroCarousel.map((photo, index) => (
          <FaCircle
            key={photo.id}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
