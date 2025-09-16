import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const bellImageFallback = "https://storage.googleapis.com/msgsndr/vbnNdAs4NZKZXfoz2etA/media/68c5baa5ccedb2facf051369.png";

interface BellIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BellIcon({ size = "md", className = "" }: BellIconProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const handleBellRing = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bellRotate {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(15deg); }
            20% { transform: rotate(-15deg); }
            30% { transform: rotate(12deg); }
            40% { transform: rotate(-12deg); }
            50% { transform: rotate(8deg); }
            60% { transform: rotate(-8deg); }
            70% { transform: rotate(4deg); }
            80% { transform: rotate(-4deg); }
            90% { transform: rotate(2deg); }
            95% { transform: rotate(-1deg); }
            100% { transform: rotate(0deg); }
          }
          
          .bell-animate {
            animation: bellRotate 1s ease-in-out;
          }
        `
      }} />
      <div 
        className={`${sizeClasses[size]} flex items-center justify-center cursor-pointer group ${className} ${isAnimating ? 'bell-animate' : ''}`}
        onMouseEnter={handleBellRing}
        onClick={handleBellRing}
      >
        <ImageWithFallback 
          src={bellImageFallback} 
          alt="Bell" 
          className={`${sizeClasses[size]} object-contain`}
        />
      </div>
    </>
  );
}