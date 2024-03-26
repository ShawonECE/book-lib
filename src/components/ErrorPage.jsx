import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
      <div className="flex min-h-screen justify-center items-center">
          <div className="text-center">
              <h1 className="text-3xl font-bold">Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                  <i>{error.statusText || error.message}</i>
              </p>
              <button onClick={goHome} className="btn glass">Go to Home</button>
          </div>
      </div>
  );
}

export default ErrorPage;