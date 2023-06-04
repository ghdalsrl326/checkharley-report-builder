"use client";

import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({ content }: { content: string }) => {
  const preprocessedContent = content.replace(/\./g, ".  \n  &nbsp;  \n");

  return (
    <ReactMarkdown className="max-w-prose" remarkPlugins={[remarkGfm]}>
      {preprocessedContent}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
