/** @format */

import styled from "styled-components";
import SuccesImage from '../../assets/images/icon-thank-you.svg'

const TyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* max-width: 10rem; */
margin-top: 20%;
`;

const TyHeader = styled.h2`
    color: var(--marine-blue);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2rem;
`;

const TySubText = styled.p`
    text-align: center;
    line-height: 1.5rem;
    color: var(--cool-gray);
`;

function TyCard() {
  return (
    <TyContainer>
      <img src={SuccesImage}/>
      <TyHeader>Thank You!</TyHeader>
      <TySubText>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </TySubText>
    </TyContainer>
  );
}

export default TyCard;
