import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {AspectRatio} from "@/components/ui/aspect-ratio";

interface IProps {
  src : string
}

export const ImageDialog = ({src} : IProps ) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AspectRatio ratio={16 / 9} className="h-auto rounded-md">
          <img
            src={src}
            alt="Photo"
            className="w-full max-h-[90%] object-contain rounded-lg border border-gray-800 p-2"
          />
        </AspectRatio>
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