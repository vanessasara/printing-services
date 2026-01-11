"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const stats = [
  { number: 500, suffix: "+", label: "Happy Clients" },
  { number: 10000, suffix: "+", label: "Projects Completed" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 99, suffix: "%", label: "Satisfaction Rate" },
];

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1920&q=85"
          alt="Background pattern"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-primary-foreground/90 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
