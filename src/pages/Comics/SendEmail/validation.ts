import * as yup from "yup";

const text = {
  "required": "Este campo é obrigatório",
  "email": "Insira um e-mail válido",
  "onlyLetters": "Este campo só aceita letras.",
}

export const ValidationSchema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Z]/, text.onlyLetters).required(text.required),
  email: yup.string().email(text.email).required(text.required)
});