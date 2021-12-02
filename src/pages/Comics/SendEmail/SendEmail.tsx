import * as S from "./styles";
import { useFormik } from "formik";

import { ValidationSchema } from "./validation";

const SendEmail = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    enableReinitialize: true,
    validationSchema: ValidationSchema,
    onSubmit: (values) => { console.log(values) },
  });


  return (
    <S.Container>
      <h2>Selecione os quadrinhos desejados e envie via e-mail.</h2>
      <S.Content onSubmit={formik.handleSubmit}>
        <S.Error>
          <S.Input
            type="text"
            placeholder="Insira seu nome"
            name="name"
            value={formik.values.name}
            onChange={(e) => {
              formik.setFieldValue("name", e.target.value)
            }}
            className={formik.errors.name && formik.touched.name ? "inputError" : ""}
          />
          
          {formik.errors.name && formik.touched.name && (
            <p className="errorText">{formik.errors.name}</p>
          )}
        </S.Error>
        <S.Error>
          <S.Input
            type="email"
            placeholder="Insira seu email"
            name="email"
            value={formik.values.email}
            onChange={(e) => {
              formik.setFieldValue("email", e.target.value)
            }}
            className={formik.errors.email && formik.touched.email ? "inputError" : ""}
          />
          
          {formik.errors.email && formik.touched.email && (
            <p className="errorText">{formik.errors.email}</p>
          )}
        </S.Error>
        <S.Button type="submit">Enviar e-mail</S.Button>
      </S.Content>
    </S.Container>
  )
}

export default SendEmail;