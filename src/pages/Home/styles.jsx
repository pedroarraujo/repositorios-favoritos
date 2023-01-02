import styled, {
    keyframes,
    css,
} from 'styled-components'

const shaking = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateX(0.5rem) }
    75% { transform: translateX(-0.5rem) }
    100% { transform: translateX(0) }
`;

const shakingAnimation = props => (props.error && css` ${shaking} 0.2s ease-in-out; `)

export const Form = styled.form`

position: relative;
animation: ${shakingAnimation};

input {
    border: 1px solid ${props => (props.error ? '#ff0000' : '#dedede;')};
    background-color: ${props => (props.error ? '#ffdfdf' : '#dedede;')};
    border-radius: 4px;
    padding: 10px;
    outline: none;
    width: 100%;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

div {
    position: absolute;
    left: 0;
    width: 100%;
    display: ${props => (props.error ? 'block' : 'none')};
}

`;

export const ButtonSubmit = styled.button.attrs(props => ({
    type: 'submit',
}))`

position: absolute;
top: 3px;
right: 3px;
bottom: 3px;
width: 35px;
border-radius: 4px;
border: none;
background-color: #0d47a1;
color: #fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

`

export const AlertError = styled.div`

transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
border-radius: 4px;
box-shadow: none;
background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
font-weight: 400;
font-size: 0.875rem;
line-height: 1;
letter-spacing: 0.01071em;
background-color: rgb(22, 11, 11);
display: flex;
align-items: center;
gap: 10px;
padding: 15px 16px;
color: rgb(244, 199, 199);
margin-top: 10px

`

export const List = styled.ul`

list-style: none;

li:first-child {
    margin-top: 20px;
}

li:not(:last-child) {
    border-bottom: 1px solid #dedede22;
}

li {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

}

a {
    color: #fff;
    border: 1px solid rgba(222, 222, 222, 0.05);
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a:hover {
    background-color: rgba(222, 222, 222, 0.05);
}

`

export const ListName = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    line-height: 1em;
`

export const DeleteButton = styled.button`
    color: #ffffff;
    background-color: #f5b7bf3e;
    border: none;
    border-radius: 100px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #ff0000;
        background-color: #F5B7BF;
    }
`

export const Sugestoes = styled.div`

margin-top: 40px;

a {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    display: inline-block;
    padding: 5px 15px;
}

ul {
    list-style: none;
    display: grid;
    grid-template-columns: 100%;
    margin-top: 10px;
}

li {
    font-size: 13px;
    text-align: left;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    position: relative;
    background-color: rgba(133, 133, 133, 0.05);

    &:nth-child(2n) {
        background-color: transparent
    }

    .sugestaoItem {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .sugestaoPath {
        display: flex;
        align-items: center;
        gap: 10px;
    }


`