import {
  Wrapper,
  WrapperCard,
  WrapperChart,
  WrapperText,
  WrapperPreco,
  WrapperDia,
} from "./styled";

import Chart from "react-apexcharts";

const options = {
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: 72,
        image: "../../assets/img/silo.png",
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#00F0FF"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },

  stroke: {
    lineCap: "round",
  },
};

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
