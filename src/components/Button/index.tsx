import { Wrapper } from "./styled.js";

export function Button({ buttonText = "", className = "" }) {
    return (
        <Wrapper>
            <button className={className}>{buttonText && <span>{buttonText}</span>} </button>;
        </Wrapper>
    );
}
