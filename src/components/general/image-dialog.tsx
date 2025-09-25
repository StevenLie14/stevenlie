import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface IProps {
  src: string
  alt?: string
  className?: string
}

export const ImageDialog = ({ src,className, alt = "Certification Image" }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer group pointer-events-auto">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className={
                cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ",className)
              }
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm rounded-full p-2">
                <ZoomIn className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="min-w-[90vw] max-h-[90vh] p-4">
        <DialogTitle>Image</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt="Photo"
            className="max-h-[80vh] w-full object-contain rounded-lg border border-gray-800"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
