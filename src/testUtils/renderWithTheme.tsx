import { ReactNode } from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

export const renderWithTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={light || dark}>{children}</ThemeProvider>);
};
