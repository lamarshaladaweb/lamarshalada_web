"use client";

import React from "react";

type RichTextProps = {
  content: string;
  className?: string;
};

export default function RichText({ content, className }: RichTextProps) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}
