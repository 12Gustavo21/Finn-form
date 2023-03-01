import React from "react";
import GlobalStyle from "./global/style";
import * as S from "./style";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <body>
        <header>
          <S.HeaderContainer>
            <S.HeaderContent>
              <h1>Bem-vindo,</h1>
              <p>embarque nesta aventura, faça seu login!</p>
            </S.HeaderContent>
          </S.HeaderContainer>
        </header>
        <main>
          <S.MainContainer>
            <S.MainContent>
              <S.Head>
                <S.Face>
                  <S.Eyes>
                    <S.Eye></S.Eye>
                    <S.Eye></S.Eye>
                  </S.Eyes>
                  <S.Inputs>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                  </S.Inputs>
                </S.Face>
                <S.Ears>
                  <S.Ear></S.Ear>
                  <S.Ear></S.Ear>
                </S.Ears>
              </S.Head>
            </S.MainContent>
          </S.MainContainer>
        </main>
        <footer>
          <S.FooterContainer>
            <S.FooterContent>
              <button>Entrar</button>
            </S.FooterContent>
          </S.FooterContainer>
        </footer>
      </body>
    </>
  );
}
