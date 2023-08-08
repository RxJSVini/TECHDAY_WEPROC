import styled from 'styled-components';

// Criação de um componente estilizado para o rodapé
export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor}; // Cor de fundo do rodapé definida pelo tema
  height: 70px; // Altura do rodapé
  display: flex; // Usa flex para organizar os elementos internos
  align-items: center; // Alinha os elementos verticalmente no centro
  padding: 0 24px; // Espaçamento interno horizontal
  border-radius: 10px; // Borda arredondada
  justify-content: space-between; // Espaçamento uniforme entre os elementos internos
  margin-top: 24px; // Espaçamento superior

  button {
    cursor: pointer; // Cursor de ponteiro quando passa sobre o botão
    background: transparent; // Fundo transparente
    border: none; // Sem borda
  }
`;
