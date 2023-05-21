import { Link, useRouteError } from 'react-router-dom';
import errorIcon from "../../assets/marvel-pod-action-figures-error-page-shield.png";
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
  useTitle("Error");
  const { error, status } = useRouteError()

  return (
    <section className='flex items-center p-16 bg-black text-red-600'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-16'>
        <div className="row w-40">
            <img className="mx-auto" src={errorIcon} alt="error-image" />
        </div>
        
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to the Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage