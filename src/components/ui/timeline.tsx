"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Building2 } from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

interface TimelineEntry {
  title: string;
  position: string;
  company: string;
  description: string;
  achievements: string[];
  skills: string[];
  location: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
          <span className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]">
            Experience
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-5">
        {data.map((item) => (
          <div key={item.position} className="flex justify-start pt-30 gap-6">
            <div className="sticky flex flex-row items-center self-start max-w-xs">
              <div className="h-10 w-10 absolute left-3 rounded-full flex items-center justify-center neon-glow relative">
                <div className="h-4 w-4 rounded-full bg-blue-500 border border-primary p-2" />
              </div>
            </div>

            <div className="relative pl-6 pr-4 w-full">
              <h3 className="text-xl mb-2 text-left font-bold">{item.position}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{item.company}</span>
                <span> . {item.location}</span>
              </div>
              <span className="text-sm text-muted-foreground mb-4 block">{item.title}</span>

              <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-accent">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((ach) => (
                          <li key={ach} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-sm text-accent">Skills:</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {item.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs bg-gray-800 text-gray-300 border-gray-700"
                            >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
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
