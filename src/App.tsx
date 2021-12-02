import { ThemeProvider } from "styled-components";
import usePersitedState from "./utils/usePersitedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyled from "./styles/global";
import Comics from "./pages/Comics/Comics";
import Layout from "./components/Layout";
import ToastComponent from "./components/Toast";

function App() {
  const [theme, setTheme] = usePersitedState("theme", light);

  const handleSwitchTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyled />
      <ToastComponent />
      <Layout handleSwitchTheme={handleSwitchTheme}>
        <Comics />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
