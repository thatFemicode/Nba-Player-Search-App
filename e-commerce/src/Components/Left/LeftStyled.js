import styled from "styled-components";

export const LeftStyled = styled.div`
  /* display: flex; */
  /* align-items: center; */
  height: 100%;
  justify-content: space-between;

  .text {
    width: 70%;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      @media screen and (min-height: 400px) and (max-height: 600px) {
        font-size: 2rem;
      }
      @media screen and (min-height: 700px) and (max-height: 800px) {
        font-size: 2.5rem;
      }

      @media (max-width: ${({ theme }) => theme.dont}) {
        font-size: 2rem;
      }
      @media (max-width: ${({ theme }) => theme.min}) {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 1.2rem;
      line-height: 1.4;
      text-align: justify;
      @media screen and (min-height: 400px) and (max-height: 600px) {
        font-size: 1rem;
        /* text-align: unset; */
      }
      @media (max-width: ${({ theme }) => theme.min}) {
        font-size: 0.9rem;
      }
    }
  }
`;
