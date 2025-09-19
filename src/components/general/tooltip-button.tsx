"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContactButtonProps {
  icon: ReactNode
  tooltip: string
  color?: string
  tooltipColor?: string
  side?: "top" | "right" | "bottom" | "left"
  href?: string
}

export function TooltipButton({icon, tooltip, color, tooltipColor = "", side = "bottom", href}: ContactButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {href ? (
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={cn("pointer-events-auto transition-all", color)}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className={cn("pointer-events-auto transition-all", color)}
          >
            {icon}
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent side={side} className={tooltipColor}>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}
