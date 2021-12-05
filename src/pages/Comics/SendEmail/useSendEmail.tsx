import EmailTemplate from "../../../components/EmailTemplate";
import { ToastDisplay } from "../../../components/Toast";

import { useFormik } from "formik";
import { ValidationSchema } from "./validation";

import { renderToStaticMarkup } from "react-dom/server"

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

    try {
      send(
        "gmailMessage",
        "template_7mzv00a",
        {
          subject: "Comics",
          name: values.name,
          email: values.email,
          message: renderToStaticMarkup(<EmailTemplate selecteds={selectedComics} />),
        },
        "user_wqnDKU563ImNexXowG5Q7");
      ToastDisplay.success("E-mail enviado com sucesso.")
    } catch (error) {
      ToastDisplay.error("Houve uma falha ao enviar e-mail, tente novamente.")
    }
  }

  return {
    formik
  }
}