import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface GlowingCardProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
  hoverEffect?: boolean;
}

const GlowingCard = ({
  className,
  children,
  glowColor = "rgba(139, 92, 246, 0.4)",
  hoverEffect = true,
}: GlowingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "space-card rounded-xl p-4 relative backdrop-blur-sm",
        hoverEffect && "transition-all duration-500 hover:bg-opacity-50 hover:border-opacity-70",
        className
      )}
      style={{
        background: "rgba(17, 24, 39, 0.7)",
        boxShadow: `0 0 ${isHovered ? '25px' : '15px'} ${glowColor}`,
        borderColor: glowColor.replace(')', ', 0.2)')
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-20 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          transition: "opacity 0.5s ease",
          opacity: isHovered ? 0.3 : 0.1
        }}
      />
      
      {/* Top edge highlight */}
      <div 
        className="absolute top-0 left-4 right-4 h-px opacity-30 pointer-events-none"
        style={{ 
          background: `linear-gradient(to right, transparent, ${glowColor}, transparent)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;
