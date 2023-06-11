"use client";
import { ImageType } from "@/data/report.type";
import { urlFor } from "@/service/sanity";
import React, { useState } from "react";
import ModalPortal from "./ModalPortal";
import ImageModal from "./ImageModal";

type Props = {
  images: ImageType[];
};

const ImageSlide = ({ images }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState<ImageType>(images[0]);

  return (
    <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap">
      {images.map((image) => (
        <span
          className="flex-shrink-0 cursor-pointer"
          key={image.asset._ref}
          onClick={() => {
            setImage(image);
            setOpenModal(true);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-xl w-60 aspect-square"
            src={urlFor(image).fit("max").url()}
            alt="image_slide"
          />
        </span>
      ))}
      {openModal && (
        <ModalPortal>
          <ImageModal onClose={() => setOpenModal(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlFor(image).fit("max").url()}
              alt="slide_detail_Image"
              className="w-4/6"
            />
          </ImageModal>
        </ModalPortal>
      )}
    </div>
  );
};

export default ImageSlide;
