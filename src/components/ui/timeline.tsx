"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {ExperienceCard} from "@/components/experience/experience-card.tsx";
import type {Certification} from "@/models/certification.ts";
import {CertificationCard} from "@/components/certification/certification-card.tsx";

interface IProps {
  item : {type : "Experience", data: Experience[]} | {type: "Certification", data: Certification[]};
}

export const Timeline = ({ item }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const renderCards = () => {
    switch (item.type) {
      case "Experience":
        return (
          <div className="mt-10 space-y-20">
            {item.data.map((exp, index) => (
              <ExperienceCard key={exp.position} experience={exp} />
            ))}
          </div>
        );
      case "Certification":
        return (
          <div className="mt-10 space-y-20">
            {item.data.map((cert, index) => (
              <CertificationCard key={cert.title} certification={cert} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-balance">
          <span className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]">
            {item.type}
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {renderCards()}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 -top-12 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
