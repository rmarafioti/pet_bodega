"use client";

import React, { useRef } from "react";
import Responsive_Image_Layout from "./Responsive_Image_Layout";
import { heroCarousel } from "../_data/photos";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

import styles from "../_styling/hero_carousel.module.css";

const SWIPE_THRESHOLD = 50; // px the finger must travel to count as a swipe

export default function Hero_Carousel({
  onNext,
  onPrev,
  currentImageObj,
  currentIndex,
}) {
  const touchStart = useRef({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;

    // Ignore short movements and mostly-vertical gestures (page scrolling)
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0)
      onNext(); // swiped left -> next photo
    else onPrev(); // swiped right -> previous photo
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={styles.section}
    >
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
