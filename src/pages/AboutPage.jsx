import { Button } from "@/components/ui/button";

import { ABOUT_US } from "../contant";

function AboutPage() {
  return (
    <div className="w-full">
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-white to-sky-700 -z-10" />
      <div className="w-full h-[250px] relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <h3 className="font-bold text-4xl text-white">About us</h3>
      </div>
      <div className="w-full max-w-screen-md mx-auto -translate-y-20">
        <img
          className="size-full object-contain object-center"
          src="saodo.jpg"
          alt="Dai hoc sao do"
        />
        <div className="size-full px-4 md:px-0 mt-10 flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-700">
            About Sao Đỏ University
          </h2>
          <ul className="w-full flex flex-col gap-2">
            {ABOUT_US.map((e, i) => (
              <li key={i} className="flex flex-col gap-2">
                <span className="text-sm font-medium text-red-500 uppercase">
                  {e.title}
                </span>
                <p className="text-lg text-justify line-clamp-5 md:line-clamp-none">
                  {e.content}
                </p>
                <Button
                  variant="link"
                  className="block md:hidden w-max px-5 mx-auto"
                >
                  Read more
                </Button>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-gray-700 mt-10">Our team</h2>
          <div className="grid grid-cols-4">
            <div className="flex flex-col gap-1 h-full items-center justify-center">
              <img
                className="size-52 rounded-full object-cover object-center overflow-hidden"
                src="ngoc.jpg"
                alt=""
              />
              <h3 className="text-lg font-medium">Nguyễn Thị Bích Ngọc</h3>
              <p className="uppercase text-red-500">topic experience</p>
            </div>
            <div className="h-full w-[2px] bg-gray-300 mx-auto" />
            <div className="grid grid-cols-2 col-span-2 gap-2 gap-y-4">
              <div className="flex items-center justify-center flex-col gap-1">
                <img
                  className="size-36 rounded-full object-cover object-center overflow-hidden"
                  src="long.jpg"
                  alt=""
                />
                <h3 className="text-lg font-medium">Nguyễn Đặng Long</h3>
                {/* <p>Design and build website</p> */}
              </div>
              <div className="flex items-center justify-center flex-col gap-1">
                <img
                  className="size-36 rounded-full object-cover object-center"
                  src="dat.jpg"
                  alt=""
                />
                <h3 className="text-lg font-medium">Bùi Quý Đạt</h3>
                {/* <p>Search documents and collect tools</p> */}
              </div>
              <div className="flex items-center justify-center flex-col gap-1">
                <img
                  className="size-36 rounded-full object-cover object-center"
                  src="bac.jpg"
                  alt=""
                />
                <h3 className="text-lg font-medium">Vũ Thị Bắc</h3>
                {/* <p>Write a report</p> */}
              </div>
            </div>
          </div>

          <p className="text-lg text-justify line-clamp-5 md:line-clamp-none mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quis, optio veritatis quae possimus labore sunt unde blanditiis
            facere quasi rerum voluptates praesentium at similique deserunt
            adipisci provident dolore ea! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati quis, optio veritatis quae possimus
            labore sunt unde blanditiis facere quasi rerum voluptates
            praesentium at similique deserunt adipisci provident dolore ea!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
