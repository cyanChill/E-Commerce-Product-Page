import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import useResizeContext from "../../hooks/useResizeContext";
import { ReactComponent as CloseSVG } from "../../assets/icon-close.svg";
import { ReactComponent as NextSVG } from "../../assets/icon-next.svg";
import { ReactComponent as PreviousSVG } from "../../assets/icon-previous.svg";
import { ProductImageType } from "../../util/types";
import styles from "./Gallery.module.css";

interface GalleryInterface {
  images: ProductImageType[];
}

const Gallery = ({ images }: GalleryInterface) => {
  const { isMobile } = useResizeContext();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selIdx, setSelIdx] = useState<number>(0);
  const [selImg, setSelImg] = useState<ProductImageType>(images[0]);

  const closeLightBox = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setSelImg(images[selIdx]);
  }, [selIdx, images]);

  return (
    <>
      {/* Light Box */}
      <LightBox
        images={images}
        selIdx={selIdx}
        selImg={selImg}
        isOpen={isOpen}
        setSelIdx={setSelIdx}
        closeHandler={closeLightBox}
      />

      {/* Mobile View */}

      {/* Normal view */}
      <div className={styles.container}>
        <img
          src={selImg?.image}
          alt="currently selected preview"
          data-main={true}
          onClick={() => setIsOpen(true)}
          className={styles.previewImg}
        />

        <div className={styles.imgOptions}>
          {images.map((img, idx) => (
            <div
              className={`${styles.thumbnail} ${
                idx === selIdx ? styles.selected : ""
              }`}
              onClick={() => setSelIdx(idx)}
            >
              <img src={img.thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

interface LightBoxProps extends GalleryInterface {
  selIdx: number;
  selImg: ProductImageType;
  isOpen: boolean;
  setSelIdx: React.Dispatch<React.SetStateAction<number>>;
  closeHandler: () => void;
}

const LightBox = ({
  images,
  selIdx,
  selImg,
  isOpen,
  setSelIdx,
  closeHandler,
}: LightBoxProps) => {
  const handleValChange = (type: "inc" | "dec") => {
    if (type === "inc") {
      setSelIdx((prev) => prev + 1);
    } else {
      setSelIdx((prev) => (prev !== 0 ? prev - 1 : prev));
    }
  };

  return createPortal(
    <div className={styles.lightbox} data-open={isOpen}>
      <div className={styles.lbBackdrop} />

      <div className={`${styles.container} ${styles.lbPreview}`}>
        <CloseSVG className={styles.closeSVG} onClick={closeHandler} />

        <div className={styles.lbMainImg}>
          <div
            className={styles.svgContainer}
            onClick={() => handleValChange("dec")}
          >
            <PreviousSVG />
          </div>
          <img
            src={selImg?.image}
            alt="currently selected preview"
            className={styles.previewImg}
          />
          <div
            className={styles.svgContainer}
            data-pos="right"
            onClick={() => handleValChange("inc")}
          >
            <NextSVG />
          </div>
        </div>

        <div className={styles.imgOptions}>
          {images.map((img, idx) => (
            <div
              className={`${styles.thumbnail} ${
                idx === selIdx ? styles.selected : ""
              }`}
              onClick={() => setSelIdx(idx)}
            >
              <img src={img.thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("lightbox") as HTMLElement
  );
};
