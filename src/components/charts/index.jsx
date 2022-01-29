import {
  Wrapper,
  WrapperCard,
  WrapperChart,
  WrapperText,
  WrapperPreco,
  WrapperDia,
} from "./styled";

import Chart from "react-apexcharts";

const options = {};

const series = [50];

export function Charts({ mes = "Janeiro" }) {
  return (
    <Wrapper>
      <WrapperCard>
        <h1>{mes}</h1>
        <WrapperChart>
          <Chart
            type="radialBar"
            height="160px"
            options={options}
            series={series}
          />
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
