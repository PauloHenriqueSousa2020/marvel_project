import ToastAnimated, { ToastDisplay } from "./index";
import { renderWithTheme } from "../../testUtils/renderWithTheme";

describe("Toast Component", () => {
  it("should render toasts", async () => {
    renderWithTheme(<ToastAnimated />);
    ToastDisplay.success("Sucesso");
    ToastDisplay.error("Error");
    ToastDisplay.info("Info");
  });
});
