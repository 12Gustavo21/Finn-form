import styled from "styled-components";

export const HeaderContainer = styled.section`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const HeaderContent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
    gap: 1rem;
    z-index: 1;

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
    }

    @media only screen and (width <= 515px) {
        width: 70%;

        p {
            font-size: 1.2rem;
        }
    }
`;

export const MainContainer = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainContent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Head = styled.section`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4rem 4rem 0 0;
    background-color: #fff;

    @media only screen and (1000px <= width <= 1200px) {
        width: 50%;
    }

    @media only screen and (851px <= width <= 999px) {
        width: 60%;
    }

    @media only screen and (width <= 851px) {
        width: 80%;        
    }

    @media only screen and (width <= 600px) {
        width: calc(100% - 1rem);
    }
`;

export const Face = styled.section`
    width: 75%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFE1C9;
    border-radius: 50%;
    z-index: 2;

    @media only screen and (width <= 455px) {
        width: 90%;
    }
`;

export const Ears = styled.section`
    width: 96.5%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 3rem;
    z-index: 0;

    @media only screen and (1000px <= width <= 1200px) {
        width: 83%;
        justify-content: space-around;
    }

    @media only screen and (851px <= width <= 999px) {
        width: 60%;
        justify-content: space-between;
    }

    @media only screen and (width <= 851px) {
        width: 80%;
        justify-content: space-between;
    }

    @media only screen and (width <= 600px) {
        width: 95%;
    }
`;

export const Ear = styled.section`
    width: 10%;
    height: 50%;
    background-color: #FFF;
    border-radius: 50% 50% 0 0;

    @media only screen and (851px <= width <= 999px) {
        width: 15%;
    }

    @media only screen and (width <= 851px) {
        width: 17%;
    }
`;

export const Eyes = styled.section`
    width: 85%;
    height: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Eye = styled.section`
    width: 9%;
    height: 43%;
    background-color: #000;
    border-radius: 50%;
`;

export const Inputs = styled.section`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
        width: 50%;
        height: 2.5rem;
        padding: 0 .5rem;
        border: 0.13rem solid #000;
        border-radius: .3rem;
        font-size: 1rem;
    }

    input::placeholder {
        font-size: 1rem;
        font-weight: 400;
        color: #CCCCCC;
    }
`;

export const FooterContainer = styled.section`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterContent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background-color: #55A603;
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
        border: none;
        width: 9rem;
        height: 3rem;
        text-transform: uppercase;
        color: #B2F272;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        border-radius: 0.3rem;
        font-weight: 700;
        cursor: pointer;
        transition: 1s ease-in-out;
    }

    button:hover {
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    }
`;