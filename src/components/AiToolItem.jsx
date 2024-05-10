import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function AiToolItem({ el, index }) {
  return (
    <Dialog className="w-[800px] overflow-auto">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
        <h4 className="text-2xl font-bold h-max">
          {`${index}. ${el.title}`}
          <span className="text-red-500 text-xl">(Free)</span>
        </h4>
        <video controls className="w-full" src={el.videoUrl}></video>

        <p className="text-base line-clamp-5">{el.description}</p>
        <div className="flex items-center gap-4">
          <Link to={el.path}>
            <Button className="w-max bg-sky-500 px-10 hover:bg-sky-600">
              Try it
            </Button>
          </Link>
          <DialogTrigger>Read more</DialogTrigger>
        </div>
        <DialogContent className="text-black">
          <DialogHeader>
            <DialogTitle className="text-xl text-center font-bold">
              {el.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {el.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </div>
    </Dialog>
  );
}
