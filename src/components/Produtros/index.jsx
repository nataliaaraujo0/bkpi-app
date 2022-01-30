import { Button } from "../../components/Button";
import { Wrapper } from "./styled";
export function Produtos() {
  return (
    <Wrapper>
      <Button buttonText="Farelo de soja" className="active" />
      <Button buttonText="Milho" />
      <Button buttonText="Trigo" />
      <Button buttonText="Algodão" />
      <Button buttonText="DDG" />
    </Wrapper>
  );
}
