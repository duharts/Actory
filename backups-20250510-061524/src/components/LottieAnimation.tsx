'use client';
import React, { useEffect, useRef } from 'react';

interface LottieAnimationProps {
  animationUrl: string;
  height?: string;
}

const LottieAnimation = ({ animationUrl, height = 'h-64 md:h-96' }: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any = null;

    const loadAnimation = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        const lottie = (await import('lottie-web')).default;
        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: animationUrl
        });
      }
    };

    loadAnimation();

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [animationUrl]);

  return <div ref={containerRef} className={`w-full ${height}`}></div>;
};

export default LottieAnimation;




