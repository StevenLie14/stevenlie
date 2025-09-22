
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import {Dialog, DialogTrigger} from "@/components/ui/dialog.tsx";
import ProjectModal from "@/components/project/project-modal.tsx";

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {


  return (
    <>

      {projects.map((project, index) => (
        <Dialog>
          <DialogTrigger asChild>
            <Card
              key={index}
              className="pointer-events-auto group pt-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                  {project.category}
                </Badge>
                <div className="absolute top-4 right-4 text-gray-400 text-sm">{project.date}</div>
                <Button
                  size="sm"
                  className="absolute bottom-4 right-4 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/30"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>

              <CardContent className="px-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-gray-800 text-gray-300 border-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {
                    project.github && (
                      <a href={project.github} target="_blank" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400 bg-transparent border-gray-700 text-gray-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )
                  }
                  {
                    project.demo && (
                      <a href={project.demo} target="_blank" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-purple-500/10 hover:border-purple-500 hover:text-purple-400 bg-transparent border-gray-700 text-gray-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )
                  }
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <ProjectModal project={project} />
        </Dialog>

      ))}


    </>
  )
}
