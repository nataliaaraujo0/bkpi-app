import {
  Wrapper,
  WrapperCard,
  WrapperChart,
  WrapperText,
  WrapperPreco,
  WrapperDia,
} from "./styled";

export function Charts() {
  return (
    <Wrapper>
      <WrapperCard>
        <h1>Janeiro</h1>
        <WrapperChart>
          <span>chart aqui</span>
        </WrapperChart>
        <WrapperText>
          <WrapperPreco>
            <h1>R$ 1.735,00</h1>
            <span>Preço médio</span>
          </WrapperPreco>
          <WrapperDia>
            <h1>16,5 dias</h1>
            <span>Comprado</span>
          </WrapperDia>
        </WrapperText>
      </WrapperCard>
    </Wrapper>
  );
}
