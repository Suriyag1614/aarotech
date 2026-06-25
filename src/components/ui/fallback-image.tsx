"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface FallbackImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export function FallbackImage({ 
  src, 
  fallbackSrc = '/images/placeholder.svg', 
  alt, 
  ...rest 
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [prevSrcProp, setPrevSrcProp] = useState(src);

  if (src !== prevSrcProp) {
    setPrevSrcProp(src);
    setImgSrc(src);
  }

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt || "Image"}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
