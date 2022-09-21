import styled from 'styled-components';

export const HomeWrapper = styled.section`
  /* background-image: url('./images/pb.png'); */
  width: 800px;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: 20px 27px 67px 25px rgba(0, 0, 0, 0.4);
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;


export const Section = styled.section`
  margin: 30px auto;
`;
export const Header = styled.h2`
  margin: 20px auto;
  text-align: center;
`;



