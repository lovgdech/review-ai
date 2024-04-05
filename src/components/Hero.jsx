import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="w-full h-screen min-h-[700px]">
      <div className="w-full h-screen absolute top-0 overflow-hidden -z-10">
        <img
          className="w-full h-screen object-cover object-center"
          src="/banner.jpg"
          alt="Background image"
        />
        <div className="absolute h-full w-screen top-0 left-0 bg-gradient-to-b from-slate-950 to-slate-800 opacity-70" />
      </div>
      <div className="w-full max-w-screen-xl h-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 justify-center text-white">
        <h3 className="text-7xl max-w-[700px] font-bold text-gray-50">
          Exploring the Depths of Artificial Intelligence
        </h3>
        <p className="max-w-[700px] text-lg text-gray-300">
          Artificial Intelligence (AI) is revolutionizing how we interact with
          technology, from personalized recommendations to autonomous systems.
          Yet, ethical considerations loom large as we navigate its rapid
          evolution, emphasizing the need for responsible development and
          deployment.
        </p>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="text-base min-w-32 h-12 rounded-lg bg-transparent hover:text-gray-300 hover:border-gray-300 hover:bg-transparent"
          >
            Get started
          </Button>
          <Button className="text-base min-w-32 h-12 rounded-lg bg-gray-300 text-black hover:bg-gray-50">
            About us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
