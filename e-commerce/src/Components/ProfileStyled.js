import styled from "styled-components";

export const ProfileStyled = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  /* margin-top: 7rem; */

  /* .profile-entry {
    display: inline-block;
  } */
  @media (max-width: ${({ theme }) => theme.min}) {
    width: 90%;
    margin-top: 2rem;
  }
  .team-logo {
    width: 40%;
  }
  .profile-pic {
    @media (max-width: ${({ theme }) => theme.min}) {
      width: 60%;
    }
  }
  .profile-entry {
    margin-bottom: 1rem;
  }
`;
