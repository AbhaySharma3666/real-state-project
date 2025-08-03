import { useRouteError, Link } from "react-router-dom";
import "./errorBoundary.scss";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="error-boundary">
      <div className="content">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText || "Something went wrong"}</p>
        <Link to="/" className="back-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary; 