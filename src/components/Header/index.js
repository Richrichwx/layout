import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { DotaIcon } from '../../ui/icons/DotaIcon';
import { BonusesIcon } from '../../ui/icons/BonusesIcon';
import { IntuitionIcon } from '../../ui/icons/IntuitionIcon';
import Navbar from '../Navbar';
import User from '../Users';
import { RatesIcon } from '../../ui/icons/RatesIcon';

const HeaderContainer = styled.div`
 width: 100%;
 height: 90px;
 background: #ffffff;
`;

const HeaderWrapper = styled.div`
  padding: 0 38px;
  display: flex;
  justify-content: space-between;
   @media (max-width: 600px){
   padding: 0 30px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 30px;
  border-bottom: 2px solid #eaeef1;
    @media (max-width: 600px){
   padding: 0;
  }
`;

const LogoImage = styled.div`

`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
   @media (max-width: 600px){
   margin: 0;
  }
`;

const LogoText = styled.div`
  font-family: Averta-ExtraBold;
  font-size: 25px;
  margin-top: 3px;
   @media (max-width: 717px){
    display: none;
  }
`;

const Dota = styled.div`
  background: #2f3647;
  width: 90px;
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #12151d;
    svg {
      fill: rgb(255, 60, 0);
    }
  }
  min-width: 90px;
   @media (max-width: 800px){
    display: none;
  }
`;

const Bonuses = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-right: 2px solid #eaeef1;
  border-bottom: 2px solid #eaeef1;
  &:hover {
    border-bottom: 2px solid #2db2f0;
  }
  cursor: pointer;
  min-width: 206px;
  @media (max-width: 1389px){
    flex-direction: column;
    padding: 0;
    min-width: 160px;
  }
    @media (max-width: 1100px){
    display: none;
  }
`;

const BonusesWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: #2db2f0;
  border-radius: 50%;
  margin-right: 16px;
  @media (max-width: 1389px){
   margin: 0;
  }
`;

const ContainerInfo = styled.div`
  @media (max-width: 1389px){
    text-align: center;
  }
`;

const BonusesTitle = styled.div`
  font-size: 16px;
  color: #2db2f0;
  font-family; "MullerBold", sans-serif;
  font-weight: bold;
`;

const BonusesText = styled.div`
  font-size: 14px;
  color: #92cfec;
`;

const Intuition = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-right: 2px solid #eaeef1;
  border-bottom: 2px solid #eaeef1;
  &:hover {
    border-bottom: 2px solid #0656f9;
  }
  cursor: pointer;
  min-width: 206px;
  @media (max-width: 1389px){
    flex-direction: column;
    padding: 0;
    min-width: 160px;
  }
   @media (max-width: 1100px){
    display: none;
  }
`;
const IntuitionWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: #2db2f0;
  border-radius: 50%;
  margin-right: 16px;
  @media (max-width: 1389px){
   margin: 0;
  }
`;

const IntuitionTitle = styled.div`
  font-size: 16px;
  color: #0656f9;
  font-family; "MullerBold", sans-serif;
  font-weight: bold;
`;

const IntuitionText = styled.div`
  font-size: 14px;
  color: #729dff;
`;

const UserContainer = styled.div`
  padding: 0 30px;
  height: 90px;
  display: flex;
  align-items: center;
  @media (max-width: 600px){
    padding: 0;
  }
`;

const Rates = styled.div`
  display: flex;
  height: 45px;
  font-weight: bold;
  width: 155px;
  background: #6d809a;
  border-radius: 25px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeef1;
  &:hover {
    background: #333f51;
  }
   @media (max-width: 500px){
    height: 35px;
     width: 120px;
  }
`;
const Wrapper = styled.div`
  width: 45px;
  height: 45px;
`;

const Title = styled.p`
 color: #ffffff;
 font-size: 15px;
 margin: 0 10px 0 -5px;
  @media (max-width: 500px){
    font-size: 11px;
    
  }
`;

const HeaderCOnt = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderCOnt>
          <Logo>
            <LogoImage>
              <Img src={ logo } alt=""/>
            </LogoImage>
            <LogoText>
              CSGO.bet
            </LogoText>
          </Logo>
          <Dota>
            <DotaIcon/>
          </Dota>
          <Bonuses>
            <BonusesWrapper>
              <BonusesIcon/>
            </BonusesWrapper>
            <ContainerInfo>
              <BonusesTitle>
                Бонусы
              </BonusesTitle>
              <BonusesText>
                Ежедневные раздачи
              </BonusesText>
            </ContainerInfo>
          </Bonuses>
          <Intuition>
            <IntuitionWrapper>
              <IntuitionIcon/>
            </IntuitionWrapper>
            <ContainerInfo>
              <IntuitionTitle>
                Интуиция
              </IntuitionTitle>
              <IntuitionText>
                Угадывай событие
              </IntuitionText>
            </ContainerInfo>
          </Intuition>
        </HeaderCOnt>
        <UserContainer>
          <Rates>
            <Wrapper>
              <RatesIcon/>
            </Wrapper>
            <Title>
              Мои ставки
            </Title>
          </Rates>
          <User/>
        </UserContainer>
      </HeaderWrapper>
      <Navbar/>
    </HeaderContainer>
  )
};

export default Header;