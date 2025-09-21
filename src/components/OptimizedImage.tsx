'use client';

import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  quality = 75
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      priority={priority}
      quality={quality}
    />
  );
}
