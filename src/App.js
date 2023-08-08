import React, { useMemo, useState } from "react";
import themes from "./styles/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

function App() {
  const [myTheme, setMyTheme] = useState("dark");
  const currentTheme = useMemo(() => {
    return themes[myTheme] || themes.dark;
  }, [myTheme]);

  function handleToggleTheme() {
    setMyTheme((themeState) => (themeState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={myTheme} />
    </ThemeProvider>
  );
}

export default App;
