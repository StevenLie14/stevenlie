import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import {ExternalLink, Github, Lock} from "lucide-react";
import {ImageDialog} from "@/components/general/image-dialog.tsx";
import {DialogContent, DialogTitle} from "@/components/ui/dialog.tsx";
import {useState} from "react";

interface ProjectModalProps {
  project: Project
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <DialogContent className="max-w-[70vw] sm:max-w-[80vw] lg:max-w-[90vw] p-4">
      <DialogTitle>{project.title}</DialogTitle>
      <p className="text-gray-300 text-sm sm:text-base">{project.longDescription}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div>
          <ImageDialog src={project.images[selectedImage]} />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-[4/3] w-full rounded border-2 flex items-center justify-center overflow-hidden ${
                  selectedImage === i
                    ? "border-blue-500"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <img src={img} className="w-full h-full object-contain rounded" alt={"Not Found"} />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {project.stats && Object.keys(project.stats).length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1">{value}</div>
                  <div className="text-gray-400 capitalize text-xs sm:text-sm">{key}</div>
                </div>
              ))}
            </div>
          )}

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs sm:text-sm"
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
                  className="border-gray-700 text-gray-500 hover:bg-gray-700/10 bg-transparent cursor-not-allowed opacity-50 scale-100 active:scale-95 transition-transform duration-150 text-sm sm:text-base"
                  disabled
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Private
                </Button>
              ) : (
              <a href={project.github} target="_blank">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer scale-100 active:scale-95 transition-transform duration-150 text-sm sm:text-base">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent cursor-pointer scale-100 active:scale-95 transition-transform duration-150 text-sm sm:text-base"
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

  );
}
