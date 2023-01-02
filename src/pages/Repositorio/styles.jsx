import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`



`

export const Owner = styled.div`

display: flex;
gap: 20px;

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
}

div {
    width: calc(100% - 100px);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h2 {
    font-size: 22px;
}

p {
    font-size: 14px;
    margin-top: 10px;
}

`

export const BackButton = styled(Link)`

position: absolute;
top: 10px;
left: 10px;
height: 30px;
width: 30px;
border: 1px solid rgba(255,255,255,0.137);
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;

svg {
    width: 10px;
    color: #dedede
}

&:hover {
    background-color: rgba(222,222,222,0.05);
}

`

export const Filtros = styled.div`

margin-top: 30px;
font-size: 13px;
text-align: left;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

.resultados {
    opacity: 0.5;
}

div {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;

    select {
        padding: 5px;
        border-radius: 4px;
        color: #fff;
        border: 1px solid rgba(222,222,222,0.05);
        background-color: rgba(222,222,222,0.05);

        option {
            background-color: #353535;
        }
    }
}

`

export const IssuesList = styled.ul`

list-style: none;
display: grid;
grid-template-columns: 100%;
gap: 10px;
margin-top: 10px;

@media (min-width: 768px) {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
}

li {
    text-align: left;
    background-color: rgba(222, 222, 222, 0.05);
    border: 1px solid rgba(222, 222, 222, 0.05);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h3 {
    font-size: 16px;

    a {
        color: #fff;
        text-decoration: none;
        overflow-wrap: break-word;
        background-image: -webkit-linear-gradient(transparent 93%, #ffffff 5px);
        background-size: 0px;
        background-repeat: no-repeat;
        display: inline;
        transition: .3s ease-out;

        &:hover {
            background-size: 100%;
        }

    }
}

.issuesUser {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}

.issuesUser img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    border-radius: 100%;
}

.issuesUser p {
    font-size: 11px;
    opacity: 0.5;
}

`

export const Labels = styled.div`
margin-bottom: 10px;
display: flex;
gap: 5px;
flex-wrap: wrap;

span {
    font-size: 11px;
    display: inline-block;
    padding: 2px 7px;
    border-radius: 20px;
    background-color: #bde0fe2d;
}
`

export const Pagination = styled.div`

margin-top: 20px;
display: grid;
grid-template-columns: 100%;
gap: 10px;

@media (min-width: 768px) {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
}

button {
    border: 0;
    background-color: #0d47a1;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    transition: 300ms;

    &:hover {
        background-color: #0c3777;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.2;
    }
}

`