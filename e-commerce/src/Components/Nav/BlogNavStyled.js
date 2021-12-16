import styled from "styled-components";

export const BlogNavStyled = styled.nav`
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  @media (max-width: ${({ theme }) => theme.min}) {
    padding: unset;
  }
  .items {
    display: flex;
    align-items: center;

    /* @media (min-width: ${({ theme }) => theme.blogNav}) {
      width: 70%;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 400px;
    } */

    button {
      font-size: 1rem;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      border-color: transparent;
      color: white;
      background-color: #1d428a;
      cursor: pointer;
    }
  }
`;
