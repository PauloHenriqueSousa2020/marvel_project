import { useFormik } from "formik";
import { ValidationSchema } from "./validation";

import { renderToStaticMarkup } from "react-dom/server"

import { ToastDisplay } from "../../../components/Toast";

import { send } from "emailjs-com";

export function useSendEmail({ selectedComics }: any) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    enableReinitialize: true,
    validationSchema: ValidationSchema,
    onSubmit: (values) => handleSendEmail(values),
  });

  const handleSendEmail = (values: any) => {
    if (selectedComics.length === 0) {
      return ToastDisplay.info("É necessário escolher ao menos um quadrinho para enviar e-mail.");
    }

    send(
      "gmailMessage",
      "template_7mzv00a",
      {
        subject: "Comics",
        name: values.name,
        email: values.email,
        message: renderToStaticMarkup(<p>{selectedComics.map((selectedComic: any) => selectedComic.title)}</p>),
      },
      "user_wqnDKU563ImNexXowG5Q7").then(() => {
        ToastDisplay.success("E-mail enviado com sucesso.")
      }).catch(() =>
        ToastDisplay.error("Houve uma falha ao enviar e-mail, tente novamente mais tarde.")
      );
  }

  return {
    formik
  }
}