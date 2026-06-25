"use client";

import { pictureFrames } from "../_data/photos";
import Image from "next/image";

import styles from "../_styling/photo_gallery.module.css";

export default function Photo_Gallery() {
  return (
    <>
      <div className={styles.gallery_container}>
        {pictureFrames.map(({ id, src, height, width, alt }) => (
          <div key={id}>
            <Image
              src={src}
              height={height}
              width={width}
              alt={alt}
              className={styles.picture}
            />
          </div>
        ))}
      </div>
    </>
  );
}
