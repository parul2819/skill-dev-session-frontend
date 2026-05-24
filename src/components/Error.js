import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-red-600">
        {error?.statusText || error?.message || "Unknown error"}
      </p>
    </div>
  );
};

export default Error;