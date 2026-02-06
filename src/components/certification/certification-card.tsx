import {Building2, ExternalLink, Eye, ZoomIn} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import React from "react";
import type {Certification} from "@/models/certification.ts";
import {ImageDialog} from "@/components/general/image-dialog.tsx";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";

interface IProps {
  certification: Certification
}

export const CertificationCard = ({ certification }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer pointer-events-auto pt-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
          <div className="relative overflow-hidden group pointer-events-auto">
            <img
              src={certification.image}
              alt={certification.title}
              className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm rounded-full p-2">
                <ZoomIn className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>

          <CardContent className="px-6">
            <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
              {certification.title}
            </h3>
            <p className="mb-4 leading-relaxed text-sm">{certification.description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="min-w-[90vw] max-h-[90vh] p-4">
        <DialogTitle>{certification.title}</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={certification.image || "/placeholder.svg"}
            alt={certification.title}
            className="max-h-[80vh] w-full object-contain rounded-lg border border-gray-800"
          />
        </div>
      </DialogContent>
    </Dialog>

  )
}
