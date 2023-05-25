"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <div className="w-10/12">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        <div className="aspect-auto rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <Image src={selectedImage} alt="" width={1000} height={31} />
          ) : (
            <span>이미지 업로드</span>
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
