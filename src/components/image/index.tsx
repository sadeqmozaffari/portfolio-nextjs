'use client';
import Image from 'next/image';
import {useState} from 'react';

interface CustomImageProps {
  src: string;
  alt: string;
  classes?: string;
}

export default function CustomImage({src, alt, classes}: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const BASE_PATH = process.env.NEXT_PUBLIC_URL_IMAGE || '';

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-sky-600" />
        </div>
      )}
      <Image
        // src={src}
        src={`${BASE_PATH}${src}`}
        alt={alt}
        // fill
        className={`transition-opacity duration-500 z-20 ${isLoading ? 'opacity-0' : 'opacity-100'} ${classes}`}
        style={{objectFit: 'cover'}}
        onLoad={() => setIsLoading(false)}
        height={400}
        width={400}
        // placeholder="blur"
        // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC"
      />
    </div>
  );
}
