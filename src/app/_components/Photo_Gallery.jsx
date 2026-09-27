"use client";

import { pictureFrames } from "../_data/photos";
import usePhotoGallery from "../_hooks/usePhotoGallery";
import Image_Gallery_Modal from "../_components/Image_Gallery_modal";
import Image from "next/image";

import styles from "../_styling/photo_gallery.module.css";

function Photo_Card({ thumbnail, alt, onClick }) {
  return (
    <div className={styles.photo_container}>
      <Image
        src={thumbnail.src}
        alt={alt}
        width={thumbnail.width}
        height={thumbnail.height}
        onClick={onClick}
        className={styles.picture}
      />
    </div>
  );
}

export default function Photo_Gallery() {
  const {
    openModal,
    closeModal,
    currentImageObj,
    currentIndex,
    isOpen,
    photos,
  } = usePhotoGallery(pictureFrames);

  return (
    <>
      <div className={styles.gallery_container}>
        {pictureFrames.map(({ id, alt, thumbnail }, index) => (
          <Photo_Card
            thumbnail={thumbnail}
            alt={alt}
            key={id}
            onClick={() => openModal(index)}
            className={styles.photo}
          />
        ))}
      </div>
      <Image_Gallery_Modal
        isOpen={isOpen}
        closeModal={closeModal}
        currentIndex={currentIndex}
        currentImageObj={currentImageObj}
        photos={photos}
      />
    </>
  );
}
