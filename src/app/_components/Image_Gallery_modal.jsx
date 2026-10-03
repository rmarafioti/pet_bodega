"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

import styles from "../_styling/gallery_modal.module.css";

export default function Gallery_Modal({ isOpen, closeModal, currentImageObj }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  const handleCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onCancel={handleCancel}
      aria-label={`Image viewer: ${currentImageObj.alt}`}
    >
      <div className={styles.modalContent}>
        <div className={styles.section}>
          <Image
            src={currentImageObj.enlarged.src}
            alt={currentImageObj.alt}
            width={currentImageObj.enlarged.width}
            height={currentImageObj.enlarged.height}
            className={styles.photo}
            priority
          />
          <button
            type="button"
            onClick={closeModal}
            className={styles.closeButton}
            aria-label="close modal"
          >
            X
          </button>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <p className={styles.stat_key}>Name:</p>
              <p>{currentImageObj.enlarged.name}</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.stat_key}>Breed:</p>
              <p>{currentImageObj.enlarged.breed}</p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
