import ContentLoad from "./index";
import { renderWithTheme } from "../../testUtils/renderWithTheme";

import { screen } from "@testing-library/react";

describe("Loading Component", () => {
  it("should render with loading false", async () => {
    renderWithTheme(<ContentLoad loading={false} children={<p>Loading</p>} />);
    
    await screen.findByText("Loading");
  });

  it("should render with loading true", async () => {
    renderWithTheme(<ContentLoad loading={true} children={<p>Loading</p>} />);
    
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();

    await screen.findByRole('img', { name: /american captain/i });
    await screen.findByText(/carregando\.\.\./i);
  });
});
