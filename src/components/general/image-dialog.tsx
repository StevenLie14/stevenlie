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
            className="h-auto w-full object-contain rounded-lg border border-gray-800 p-2"
          />
        </AspectRatio>
      </DialogTrigger>

      <DialogContent className="xl:min-w-[1200px] lg:min-w-[1000px] md:min-w-[800px] sm:min-w-[600px] min-w-[400px] p-4">
        <DialogTitle>Image</DialogTitle>
        <div className="relative w-full">
          <AspectRatio ratio={16 / 9}>
            <img
              src={src}
              alt="Photo"
              className="h-full w-full object-contain rounded-lg border border-gray-800"
            />
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  )
}