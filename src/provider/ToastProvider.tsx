import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => (
  <ToastContainer
    position="bottom-center"
    hideProgressBar
    newestOnTop
    toastClassName='bg-neutral-white text-neutral-dark rounded-md border text-sm p-1 leading-8 mb-4 max-w-[90%] mx-auto'
    className="mb-12 mx-auto"
    closeButton={false}
  />
);

export { ToastProvider };
