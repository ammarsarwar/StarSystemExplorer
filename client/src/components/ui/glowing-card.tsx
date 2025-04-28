import { cn } from "@/lib/utils";
import React from "react";

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
  return (
    <div
      className={cn(
        "space-card rounded-xl p-4",
        hoverEffect && "transition-all duration-300 hover:bg-opacity-50 hover:border-opacity-50",
        className
      )}
      style={{
        boxShadow: `0 0 15px ${glowColor}`,
      }}
    >
      {children}
    </div>
  );
};

export default GlowingCard;
