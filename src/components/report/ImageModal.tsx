import React from "react";
import { GrClose as CloseIcon } from "react-icons/gr";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const ImageModal = ({ children, onClose }: Props) => {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      {children}
    </section>
  );
};

export default ImageModal;
