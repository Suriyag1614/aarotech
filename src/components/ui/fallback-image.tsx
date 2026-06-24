"use client";

import React, { useState, useEffect } from 'react';
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

  // If the src prop changes externally, reset the internal state
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

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
