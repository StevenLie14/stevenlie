import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { ExternalLink, Github } from "lucide-react";
import {type Dispatch, type MouseEvent, type SetStateAction, useState} from "react";
import { projects } from "@/data/projects.tsx";

interface ProjectModalProps {
  selectedProject: number | null;
  setSelectedProject: Dispatch<SetStateAction<number | null>>;
}

export default function ProjectModal({ selectedProject, setSelectedProject }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (selectedProject === null || !projects[selectedProject]) return null;
  const project = projects[selectedProject];

  const closeModal = (e : MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
      setSelectedImage(0);
    }
  }

  return (
    <div className="pointer-events-auto fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
      <div className="bg-gray-900 border border-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.longDescription}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeModal}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <img
                src={project.images[selectedImage]}
                alt="Preview"
                className="w-full h-80 object-cover rounded-lg border border-gray-800"
              />
              <div className="flex gap-2 mt-4">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-16 rounded border-2 ${
                      selectedImage === i
                        ? "border-blue-500"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
                    <div className="text-gray-400 capitalize text-sm">{key}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  // href={project?.githubLink}
                  target="_blank">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer scale-100 active:scale-95 transition-transform duration-150">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent cursor-pointer scale-100 active:scale-95 transition-transform duration-150"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
