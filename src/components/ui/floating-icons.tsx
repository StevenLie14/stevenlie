import { SquareCode, Server, Bot, Database, BrainCircuit } from "lucide-react"
import { motion, useAnimation, useAnimationFrame, useMotionValue, useVelocity } from "motion/react"
import {useEffect, useState} from "react"
import { cn } from "@/lib/utils.ts"

interface TechIcon {
  name: string
  Icon: any
  color: string
  classes: string
}

const techIcons: TechIcon[] = [
  { name: "JS", Icon: SquareCode, color: "#eab308", classes: "top-[85%] left-[80%] lg:top-[90%] lg:left-[80%]" },
  { name: "Database", Icon: Database, color: "#3b82f6", classes: "top-[12%] left-[5%] lg:top-[12%] lg:left-[6%]" },
  { name: "AI", Icon: Bot, color: "#9333ea", classes: "top-[55%] left-[75%] lg:top-[20%] lg:left-[50%]" },
  { name: "Brain", Icon: BrainCircuit, color: "#f43f5e", classes: "top-[45%] left-[30%] lg:top-[80%] lg:left-[30%]" },
]

export default function FloatingIcons() {

  const controlsMap = techIcons.reduce((acc, icon) => {
    acc[icon.name] = useAnimation()
    return acc
  }, {} as Record<string, ReturnType<typeof useAnimation>>)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {techIcons.map((icon) => {
        const controls = controlsMap[icon.name]
        const [isDragging, setIsDragging] = useState(false)

        const startAnimation = () => {
          void controls.start({
            translateY: [0, -10, 0, 10, 0],
            transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          })
        }

        useEffect(() => {
          startAnimation()

          if (isDragging) {
            controls.stop()
          }
        }, [isDragging, controls]);

        return (
          <motion.div
            key={icon.name}
            className={cn(`absolute pointer-events-auto ${icon.classes}`)}
            drag
            dragElastic={0.3}
            dragMomentum={false}
            whileHover={{ scale: 1.05 }}
            onDragStart={() => {
              setIsDragging(true)
            }}
            onDragEnd={() => {
              setIsDragging(false)
            }}
            animate={controls}
          >
            <motion.div
              className={cn(
                "rounded-lg flex items-center justify-center text-white shadow-lg neon-border animate-glow cursor-grab",
                "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
              )}
              style={{ backgroundColor: icon.color }}
              whileTap={{ scale: 0.95, cursor: "grabbing" }}
            >
              <icon.Icon className={"w-5 h-5 lg:w-7 lg:h-7"} strokeWidth={2} />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
