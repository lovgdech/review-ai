import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AI_TOOLS } from "../contant";

function AiTools() {
  const navigate = useNavigate();
  return (
    <div className="w-full text-gray-700 bg-[#F5F5F5] py-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <h3 className="text-3xl font-bold text-center">AI tools popular</h3>
        <p className="w-full text-lg text-center max-w-[1000px] mx-auto">
          There are numerous AI tools available across various domains, each
          offering different functionalities and capabilities. Here are some
          popular AI tools categorized based on their primary use cases:
        </p>

        <div className="grid grid-cols-2 gap-4">
          {AI_TOOLS.map((el, i) => (
            <div
              key={i}
              className="rounded-lg shadow-lg p-4 flex flex-col gap-3 bg-white transition"
            >
              <img
                className="w-auto h-full max-h-[300px] object-contain mx-auto object-center rounded-md"
                src={el.imgUrl}
                alt={el.title}
              />
              <h3 className="font-bold text-xl">
                {`${i + 1}. ${el.title}`}
                <span className="font-mono text-base text-yellow-500">
                  (free)
                </span>
              </h3>
              <p className="line-clamp-4">{el.description}</p>
              <div className="w-full flex items-center">
                <img className="h-8 w-8" src="star.png" alt="star" />
                <img className="h-8 w-8" src="star.png" alt="star" />
                <img className="h-8 w-8" src="star.png" alt="star" />
                <img className="h-8 w-8" src="star.png" alt="star" />
                <img className="h-8 w-8" src="star.png" alt="star" />
              </div>
              <div className="w-full flex items-center gap-4">
                <Button className="min-w-28">Read more</Button>
                <Link to={el.path} target="_blank">
                  <Button className="min-w-28" variant="outline">
                    Try it
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="w-max mx-auto text-base hover:underline"
          variant="ghost"
          onClick={() => navigate("ai-tools")}
        >
          More AI tools ...
        </Button>

        <p className="w-full text-lg text-center max-w-[1000px] mx-auto">
          These are just a few examples of the many AI tools available.
          Depending on your specific use case and requirements, you may need to
          explore and evaluate different tools to find the ones that best suit
          your needs.
        </p>
      </div>
    </div>
  );
}

export default AiTools;
