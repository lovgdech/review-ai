import { useState } from "react";
import { Button } from "./ui/button";

export default function ChatGpt() {
  const [chat, setChat] = useState([
    { role: "system", message: "Nice to meet you!" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  function handleSentQuestion(event) {
    event.preventDefault();
    if (input.trim() === "") return;
    setChat((prev) => [...prev, { role: "user", message: input }]);

    setIsLoading(true);

    fetch(import.meta.env.VITE_CHATGPT_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_SECRET_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        temperature: 0.7,
      }),
    })
      .then((response) => {
        if (!response.ok || response.status === 429 || !response) {
          setChat((prev) => [
            ...prev,
            { role: "system", message: "Sorry, system is busy." },
          ]);
          setInput("");
          setIsLoading(false);
          return;
        }
        return response.json;
      })
      .then((data) => {
        console.log(data);
        return data;
      });

    setInput("");
    setIsLoading(false);
  }
  return (
    <div className="w-full h-[600px]">
      <div className="w-full max-w-screen-xl h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="size-full bg-slate-700 rounded-lg text-white flex flex-col justify-between">
          <header className="w-full p-4 flex justify-between items-center">
            <h3 className="font-bold text-2xl">
              Here is basic ChatBot to you try
            </h3>
            <Button onClick={() => setChat([])}>Clear chat</Button>
          </header>
          <div className="flex-1 p-4 py-2  overflow-y-auto">
            <ul className="w-full h-full max-w-screen-md mx-auto flex flex-col gap-1">
              {chat.map((m, i) => {
                let messageClasses =
                  "w-max max-w-[50%] p-2 flex items-center gap-1";
                if (m.role === "user") {
                  messageClasses += " ml-auto bg-slate-600 rounded-lg";
                } else {
                  messageClasses += " mr-auto";
                }
                return (
                  <li key={i} className={messageClasses}>
                    {m.role === "system" ? (
                      <p className="text-red-500 font-bold">ChatBot:</p>
                    ) : (
                      <p className="text-sky-500 font-bold">You:</p>
                    )}
                    {m.message}
                  </li>
                );
              })}
            </ul>
          </div>
          <form
            onSubmit={handleSentQuestion}
            className="w-full h-max p-4 flex items-center justify-center gap-2 flex-shrink-0 flex-grow-0"
          >
            <input
              className="w-full max-w-screen-md h-14 rounded-md px-6 text-base text-black"
              type="text"
              placeholder="Message ChatBoot"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Button className="h-14 px-8" disabled={isLoading}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
