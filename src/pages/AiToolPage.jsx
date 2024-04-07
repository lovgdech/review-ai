import { Button } from "@/components/ui/button";

function AiToolPage() {
  return (
    <div>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-white to-sky-700 -z-10" />

      <div className="w-full h-[250px] relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0 gap-1">
        <h3 className="font-bold text-4xl text-white">AI tools for you</h3>
        <p className="text-lg text-white">Hope your work gets easier</p>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
          <h4 className="text-2xl font-bold">
            1. ChatGPT tool website{" "}
            <span className="text-red-500 text-xl">(Free)</span>
          </h4>
          <video controls className="w-full" src="akumaAI.mp4"></video>

          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dicta blanditiis sint maxime voluptatem assumenda reiciendis amet,
            culpa temporibus quod ipsa distinctio doloribus asperiores,
            voluptate nam rerum nisi numquam. Voluptatum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deleniti dicta blanditiis sint
            maxime voluptatem assumenda reiciendis amet, culpa temporibus quod
            ipsa distinctio doloribus asperiores, voluptate nam rerum nisi
            numquam. Voluptatum!
          </p>
          <Button className="bg-sky-500 w-max px-10 hover:bg-sky-600">
            Try it
          </Button>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
          <h4 className="text-2xl font-bold">
            2. AkumaAi tool website{" "}
            <span className="text-red-500 text-xl">(Free)</span>
          </h4>
          <video controls className="w-full" src="akumaAI.mp4"></video>

          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dicta blanditiis sint maxime voluptatem assumenda reiciendis amet,
            culpa temporibus quod ipsa distinctio doloribus asperiores,
            voluptate nam rerum nisi numquam. Voluptatum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deleniti dicta blanditiis sint
            maxime voluptatem assumenda reiciendis amet, culpa temporibus quod
            ipsa distinctio doloribus asperiores, voluptate nam rerum nisi
            numquam. Voluptatum!
          </p>
          <Button className="bg-sky-500 w-max px-10 hover:bg-sky-600">
            Try it
          </Button>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
          <h4 className="text-2xl font-bold">
            3. InvideoAI tool website{" "}
            <span className="text-red-500 text-xl">(Free)</span>
          </h4>
          <video controls className="w-full" src="invideoAI.mp4"></video>

          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dicta blanditiis sint maxime voluptatem assumenda reiciendis amet,
            culpa temporibus quod ipsa distinctio doloribus asperiores,
            voluptate nam rerum nisi numquam. Voluptatum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deleniti dicta blanditiis sint
            maxime voluptatem assumenda reiciendis amet, culpa temporibus quod
            ipsa distinctio doloribus asperiores, voluptate nam rerum nisi
            numquam. Voluptatum!
          </p>
          <Button className="bg-sky-500 w-max px-10 hover:bg-sky-600">
            Try it
          </Button>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
          <h4 className="text-2xl font-bold">
            4. BingCreate tool website{" "}
            <span className="text-red-500 text-xl">(Free)</span>
          </h4>
          <video controls className="w-full" src="bingCreate.mp4"></video>

          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dicta blanditiis sint maxime voluptatem assumenda reiciendis amet,
            culpa temporibus quod ipsa distinctio doloribus asperiores,
            voluptate nam rerum nisi numquam. Voluptatum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deleniti dicta blanditiis sint
            maxime voluptatem assumenda reiciendis amet, culpa temporibus quod
            ipsa distinctio doloribus asperiores, voluptate nam rerum nisi
            numquam. Voluptatum!
          </p>
          <Button className="bg-sky-500 w-max px-10 hover:bg-sky-600">
            Try it
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AiToolPage;
