"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Lock } from "lucide-react"
import { ImageDialog } from "@/components/general/image-dialog"
import { DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

interface ProjectModalProps {
  project: Project
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <DialogContent className="max-w-[70vw] sm:max-w-[80vw] lg:max-w-[90vw] p-6 bg-card border-border glow-border-blue">
      <DialogTitle className="text-foreground glow-text-blue text-xl sm:text-2xl font-bold">
        {project.title}
      </DialogTitle>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{project.longDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-4">
          <div className="glow-border-cyan rounded-lg overflow-hidden">
            <ImageDialog src={project.images[selectedImage] || "/placeholder.svg"} />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-[4/3] w-full rounded-lg border-2 flex items-center justify-center overflow-hidden transition-all duration-300 ${
                  selectedImage === i ? "glow-border-blue hover-glow-blue" : "border-border hover:glow-border-purple"
                }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  className="w-full h-full object-contain rounded"
                  alt="Project preview"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {project.stats && Object.keys(project.stats).length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-3 sm:p-4 bg-card/50 rounded-lg glow-border-purple hover-glow-purple transition-all duration-300"
                >
                  <div className="text-lg sm:text-2xl font-bold text-primary glow-text-cyan mb-1">{value}</div>
                  <div className="text-muted-foreground capitalize text-xs sm:text-sm">{key}</div>
                </div>
              ))}
            </div>
          )}

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  className="bg-primary/20 text-primary border-primary/30 glow-border-blue hover-glow-blue text-xs sm:text-sm transition-all duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.private || project.github == null ? (
              <Button
                variant="outline"
                className="border-muted text-muted-foreground hover:bg-muted/10 bg-transparent cursor-not-allowed opacity-50 scale-100 active:scale-95 transition-all duration-300 text-sm sm:text-base"
                disabled
              >
                <Lock className="w-4 h-4 mr-2" />
                Private
              </Button>
            ) : (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 text-primary-foreground cursor-pointer scale-100 active:scale-95 transition-all duration-300 text-sm sm:text-base hover-glow-blue neon-glow">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent cursor-pointer scale-100 active:scale-95 transition-all duration-300 text-sm sm:text-base glow-border-purple hover-glow-purple"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
