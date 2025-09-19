"use client"

import { SquareCode, Server, Bot } from "lucide-react"
import {motion, useAnimation, useAnimationFrame, useMotionValue, useVelocity} from "motion/react"
import {useState} from "react";

const techIcons = [
  { name: "JS", Icon: SquareCode, color: "#eab308", x: 72, y: 75 },
  { name: "Node", Icon: Server, color: "#22c55e", x: 10, y: 15 },
  { name: "AI", Icon: Bot, color: "#9333ea", x: 90, y: 25 },
]

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {techIcons.map((icon) => {
        const controls = useAnimation();
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const xVel = useVelocity(x);
        const yVel = useVelocity(y);
        const [isDragging, setIsDragging] = useState(false);

        useAnimationFrame(() => {
          if (!isDragging) {
            if (Math.abs(xVel.get()) < 0.1 && Math.abs(yVel.get()) < 0.1) {
              void controls.start({
                y: [y.get(), y.get() - 10, y.get(), y.get() + 10, y.get()],
                transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              });
            }
          }
        });

        return (
          <motion.div
            key={icon.name}
            className="absolute pointer-events-auto"
            style={{ left: `${icon.x}%`, top: `${icon.y}%`, x, y }}
            drag
            dragElastic={0.3}
            dragMomentum={true}
            whileHover={{ scale: 1.15 }}
            onDragStart={() => {
              setIsDragging(true);
              controls.stop();
            }}
            onDragEnd={() => {
              setIsDragging(false);
            }}
            animate={controls}
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg neon-border animate-glow cursor-grab"
              style={{ backgroundColor: icon.color }}
              whileTap={{ scale: 0.95, cursor: "grabbing" }}
            >
              <icon.Icon size={28} strokeWidth={2} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
