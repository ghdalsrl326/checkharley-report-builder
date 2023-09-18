"use client";

import React from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({ content }: { content: string }) => {
  const preprocessedContent = content;
  // .replace(/\./g, ".  \n  &nbsp;  \n")
  // .replace(/-\s/g, "\n- ");

  return (
    <ReactMarkdown
      className="max-w-prose"
      remarkPlugins={[remarkGfm]}
      components={{
        img: (image) => (
          <Image
            className="w-full max-h-60 object-cover"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {preprocessedContent}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
