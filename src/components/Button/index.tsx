import { Wrapper } from "./styled.js";

export function Button({ buttonText = "" }) {
    return (
        <Wrapper>
            <button>{buttonText && <span>{buttonText}</span>}</button>;
        </Wrapper>
    );
}
