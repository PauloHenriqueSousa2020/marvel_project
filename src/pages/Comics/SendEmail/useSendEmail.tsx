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
        process.env.REACT_APP_EMAIL_SERVICE as string,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
        {
          subject: "Comics",
          name: values.name,
          email: values.email,
          message: renderToStaticMarkup(<EmailTemplate selecteds={selectedComics} />),
        },
        process.env.REACT_APP_EMAIL_USER_ID as string);
      ToastDisplay.success("E-mail enviado com sucesso.")
    } catch (error) {
      ToastDisplay.error("Houve uma falha ao enviar e-mail, tente novamente.")
    }
  }

  return {
    formik
  }
}