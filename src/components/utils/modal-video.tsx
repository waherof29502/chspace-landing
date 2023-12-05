'use client';

import { useState, useRef, useEffect } from 'react';

interface ModalVideoProps {
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({ video, videoWidth, videoHeight }: ModalVideoProps) {
  const videoEl = useRef<HTMLVideoElement>(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('錯誤播放');
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <video
        className="p-3 rounded-2xl absolute inset-0 w-full h-full object-cover"
        ref={videoEl}
        width={videoWidth}
        height={videoHeight}
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
