import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html,
body,
#root {
    width: 100%;
    height: 100%;
}

body {
    font-size: 15px;
    background-size: cover;
    color: #fff;
    text-align: center;
    min-height: 100vh;
    width: 100%;
    background-color: #0a0a0a;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}

.container {
    max-width: 600px;
    margin: -100px auto 50px auto;
    padding: 40px;
    background-color: rgb(60 60 60 / 34%);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.137);
    box-shadow: 0 20px 75px -35px rgba(0, 0, 0, 0.247);
    backdrop-filter: blur(20px);
    font-size: 20px;
}

@media (max-width: 620px) {
    .container {
        margin: -100px 10px 50px 10px;
    }
}

header {
    background: url(../src/assets/img/fundo-header.jpg) center no-repeat;
    background-size: cover;
    font-size: 50px;
    padding: 40px;
    height: 250px;
}

header h1 {
    font-size: 35px;
}

header svg {
    margin-right: 10px;
}

button {
    cursor: pointer;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

footer {
    font-size: 15px;
    padding: 20px;
}

`;