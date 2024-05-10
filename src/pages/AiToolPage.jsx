import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AI_TOOLS } from "../contant";
import AiToolItem from "../components/AiToolItem";

function AiToolPage() {
  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-white to-sky-700 -z-10" />

      <div className="w-full max-w-screen-xl mx-auto h-[250px] relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0 gap-1">
        <h3 className="font-bold text-4xl text-white">AI tools for you</h3>
        <p className="text-lg text-white">Hope your work gets easier</p>
      </div>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 py-6">
        {AI_TOOLS.map((el, i) => (
          <AiToolItem key={i} index={i + 1} el={el} />
        ))}
      </div>
    </>
  );
}

export default AiToolPage;
