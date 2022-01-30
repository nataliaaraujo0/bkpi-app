import {
  Wrapper,
  WrapperCard,
  WrapperChart,
  WrapperText,
  WrapperPreco,
  WrapperDia,
} from "./styled";
import siloIcon from "../../assets/img/silo.png";

import Chart from "react-apexcharts";

const options = {
  colors: ["#3988FF"],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: 72,
        image: siloIcon,
        imageWidth: 20,
        imageHeight: 29,
        imageClipped: false,
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

  labels: ["50%"],
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
