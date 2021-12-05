import SendEmail from "./SendEmail";
import { ToastDisplay } from "../../../components/Toast";

import { renderWithTheme } from "../../../testUtils/renderWithTheme";

import { screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RESPONSE_SELECTEDS_COMIC_MOCK } from "../../../testUtils/Mocks/comics";

describe("SendEmail Page", () => {
  test("Should display formik errors correctly", async() => {
    renderWithTheme(<SendEmail selectedComics={[]} />);

    await act(async() => {
      userEvent.click(await screen.findByRole('button', { name: /enviar e-mail/i }));
    });

    expect(await screen.findAllByText(/este campo é obrigatório/i)).toHaveLength(2);

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu nome"), "Paulo");
    });

    expect(await screen.findAllByText(/este campo é obrigatório/i)).toHaveLength(1);

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu email"), "paulo");
    });

    expect(await screen.findByText(/insira um e-mail válido/i)).toBeInTheDocument();

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu email"), "email@teste.com");
    });

    expect(screen.queryByText(/insira um e-mail válido/i)).not.toBeInTheDocument();
  });

  test("Should display toast when submit email without selected comics", async() => {
    jest.spyOn(ToastDisplay, "info");
    renderWithTheme(<SendEmail selectedComics={[]} />);

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu nome"), "Paulo");
    });

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu email"), "email@teste.com");
    });

    await act(async() => {
      userEvent.click(await screen.findByRole('button', { name: /enviar e-mail/i }));
    });

    await waitFor(() => {
      expect(ToastDisplay.info).toHaveBeenCalledTimes(1);
      expect(ToastDisplay.info).toHaveBeenCalledWith("É necessário escolher ao menos um quadrinho para enviar e-mail.");
    });
  });
  
  test("Should send email with comics correctly", async() => {
    jest.spyOn(ToastDisplay, "success");
    renderWithTheme(<SendEmail selectedComics={RESPONSE_SELECTEDS_COMIC_MOCK} />);

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu nome"), "Paulo");
    });

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu email"), "email@teste.com");
    });

    await waitFor(async() => {
      userEvent.click(await screen.findByRole('button', { name: /enviar e-mail/i }));
    });

    await waitFor(() => {
      expect(ToastDisplay.success).toHaveBeenCalledTimes(1);
      expect(ToastDisplay.success).toHaveBeenCalledWith("E-mail enviado com sucesso.");
    });
  });

  test("Should not send email", async() => {
    jest.spyOn(ToastDisplay, "error");
    renderWithTheme(<SendEmail selectedComics={RESPONSE_SELECTEDS_COMIC_MOCK} />);

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu nome"), "Paulo");
    });

    await act(async() => {
      userEvent.type(await screen.findByPlaceholderText("Insira seu email"), "email@teste.com");
    });

    await waitFor(async() => {
      userEvent.click(await screen.findByRole('button', { name: /enviar e-mail/i }));
    });


  });
});