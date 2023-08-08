import styled from 'styled-components';

// Estilização do componente de cabeçalho
export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor}; // Cor de fundo definida pelo tema
  height: 100px; // Altura do cabeçalho
  display: flex; // Flex para organizar elementos internos
  align-items: center; // Alinhamento vertical no centro
  padding: 0 24px; // Espaçamento interno horizontal
  border-radius: 10px; // Borda arredondada
  justify-content: space-between; // Espaçamento uniforme entre os elementos internos

  button {
    font-size: 16px; // Tamanho da fonte do botão
    cursor: pointer; // Cursor de ponteiro ao passar sobre o botão
    background: transparent; // Fundo transparente
    border: none; // Sem borda
  }
`;
