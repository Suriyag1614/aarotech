"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: string;
  delay?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "animate-slide-up-fade",
  delay = "0s",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  once = true,
  ...props
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-700",
        isVisible ? animation : "opacity-0",
        className
      )}
      style={{
        animationDelay: isVisible ? delay : "0s",
        animationFillMode: "forwards",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
