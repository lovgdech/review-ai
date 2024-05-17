import { AI_TOOLS, AI_TOOLS_OTHER } from "../contant";
import AiToolItem from "../components/AiToolItem";
import ChatGpt from "../components/ChatGpt";
import { Link } from "react-router-dom";

function AiToolPage() {
  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-white to-sky-700 -z-10" />

      <div className="w-full max-w-screen-xl mx-auto h-[250px] relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0 gap-1">
        <h3 className="font-bold text-4xl text-white">AI tools for you</h3>
        <p className="text-lg text-white">Hope your work gets easier</p>
      </div>

      <ChatGpt />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2 mb-14">
        <p className="text-black text-center">
          Currently, AI (artificial intelligence) tools have developed strongly
          and are widely applied in many fields. Here are some popular and
          advanced AI tools:
        </p>
        <div className="w-full  grid grid-cols-2 gap-4 py-6">
          {AI_TOOLS.map((el, i) => (
            <AiToolItem key={i} index={i + 1} el={el} />
          ))}
        </div>

        <h4 className="text-lg">There are also many other AI tools such as:</h4>
        <div className="flex flex-col gap-4">
          {AI_TOOLS_OTHER.map((item) => (
            <ul key={item.title} className="flex flex-col gap-3">
              <li className="text-3xl font-medium">{item.title}</li>
              {item.elements.map((el, i) => (
                <li key={i} className="flex flex-col gap-2">
                  <h4 className="font-medium text-lg">
                    {el.title} -{" "}
                    <Link
                      to={el.path}
                      target="_blank"
                      className="text-sky-500 underline"
                    >
                      {el.path}
                    </Link>
                  </h4>
                  <p>{el.description}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default AiToolPage;
