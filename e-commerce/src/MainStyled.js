import styled from "styled-components";

export const MainStyled = styled.main`
  .hero {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 5rem;
    max-width: 85rem;

    @media (max-width: ${({ theme }) => theme.desktop}) {
      flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.min}) {
      margin-top: 1rem;
    }
    /* align-items: center; */
    height: 100%;
    .left {
      position: relative;
      width: 40%;
      height: 100%;

      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 100%;
      }
    }
    .right {
      position: relative;
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 100%;
        margin-top: 3rem;
      }
      @media (max-width: ${({ theme }) => theme.min}) {
        flex-direction: column;
      }
    }
  }
  .search {
    width: 40%;
    @media (max-width: ${({ theme }) => theme.min}) {
      width: 100%;
    }
  }
  .circle {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #1d428a;
    clip-path: circle(600px at left 1200px);
    @media (max-width: ${({ theme }) => theme.dont}) {
      clip-path: circle(600px at left 1400px);
    }
    @media screen and (min-height: 400px) and (max-height: 600px) {
      clip-path: circle(600px at left 1000px);
    }
  }
`;
