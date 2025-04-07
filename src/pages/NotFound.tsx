import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/analytics");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div>
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
