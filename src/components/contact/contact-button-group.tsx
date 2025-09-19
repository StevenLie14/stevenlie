import { TooltipProvider } from "@/components/ui/tooltip"
import {Github, Linkedin, Mail, Phone} from "lucide-react";
import {TooltipButton} from "@/components/general/tooltip-button.tsx";

export default function ContactButtonsGroup() {
  return (
    <TooltipProvider>
      <div className="flex gap-4">
        <TooltipButton
          icon={<Mail className="w-5 h-5" />}
          tooltip="stevenliementha@gmail.com"
          color="text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 glow-border-cyan"
          tooltipColor={"bg-cyan-500/10 fill-cyan-500/10 text-cyan-300 border border-cyan-500/30"}
          href={"mailto:stevenliementha@gmail.com"}
        />
        <TooltipButton
          icon={<Linkedin className="w-5 h-5" />}
          tooltip="Steven Liementha"
          color="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 glow-border-blue"
          tooltipColor={"bg-blue-500/10 fill-blue-500/10 text-blue-300 border border-blue-500/30"}
          href={"https://www.linkedin.com/in/steven-liementha"}
        />
        <TooltipButton
          icon={<Phone className="w-5 h-5" />}
          tooltip="+62 853 6188 2049"
          color="text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 glow-border-pink"
          tooltipColor={"bg-pink-500/10 fill-pink-500/10 text-pink-300 border border-pink-500/30"}
        />
        <TooltipButton
          icon={<Github className="w-5 h-5" />}
          tooltip="StevenLie14"
          color="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 glow-border-purple"
          tooltipColor={"bg-purple-500/10 fill-purple-500/10 text-purple-300 border border-purple-500/30"}
          href={"https://github.com/StevenLie14"}
        />
      </div>
    </TooltipProvider>
  )
}