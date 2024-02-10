import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className='text-center w-full mt-10'>
      <h1 className='text-5xl mb-4'>Oops</h1>
      {isRouteErrorResponse(error) ? (
        <h1 className='text-4xl'>This Page Doesn't Exits</h1>
      ) : (
        <h1 className='text-4xl'>An expected Error Occurred.</h1>
      )}
    </div>
  );
};

export default Error;
