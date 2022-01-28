import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

html{
    @media(max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

:root{
    --gray-900:#141414;
    --gray-600:#424242;
    --gray-700:#262626;
    --gray-500:#8D8D8D;

    --orange:#FF6600;

    --write-50: #F2F2F2;
}

body{
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: var(--gray-900);
}

`;
