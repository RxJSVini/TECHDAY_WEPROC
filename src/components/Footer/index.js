import React from "react";
import { ThemeIcon } from "../ThemeIcon";
import { Container } from "./styles";

export default function Footer({ onToggleTheme, selectedTheme }) {
  console.log(selectedTheme);
  return (
    <Container>
      <span>TechDay's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        <ThemeIcon selectedTheme={selectedTheme} />
      </button>
    </Container>
  );
}
