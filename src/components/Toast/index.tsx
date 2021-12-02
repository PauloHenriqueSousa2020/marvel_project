import { toast } from "react-toastify";

import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

export const ToastDisplay: ToastProps = {
  success: (message) => {
    toast.success(
      <div className="toastContainer">
        <p>{message}</p>
      </div>
    );
  },
  error: (message) => {
    toast.error(
      <div className="toastContainer">
        <p>{message}</p>
      </div>
    );
  },
  info: (message) => {
    toast.info(
      <div className="toastContainer">
        <p>{message}</p>
      </div>
    );
  },
}

export default function ToastComponent() {
  return (
    <S.Toast
      toastClassName="toastBody"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      limit={1}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}