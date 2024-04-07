import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center gap-2">
      <h1 className="text-5xl font-medium">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-700">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
