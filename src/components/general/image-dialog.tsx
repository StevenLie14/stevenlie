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

      <DialogContent className="max-w-[80vw] sm:max-w-[85vw] lg:max-w-[90vw] p-4">
        <DialogTitle>Image</DialogTitle>
        <AspectRatio ratio={16 / 9}>
          <img
            src={src}
            alt="Photo"
            className="h-full w-full object-contain rounded-lg border border-gray-800"
            loading="lazy"
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  )
}