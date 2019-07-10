import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import bonuses from '../../assets/bonuses.svg';
import intuition from '../../assets/intuition.svg';
import rates from '../../assets/rates.svg';

import { DotaIcon } from '../../ui/icons/DotaIcon';
import { Dropdown } from '../../ui/DropDown';
import { NavDropdown } from '../../ui/DropDown/NavDropDown';

import Navbar from '../Navbar';
import User from '../Users';

import { languages } from '../../mocks/languages';

const HeaderContainer = styled.div`
 width: 100%;
 height: 90px;
 background: #ffffff;
`;

const HeaderWrapper = styled.div`
  padding: 0 38px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eff2f5;
  align-items: center;
  @media (max-width: 860px) {
    padding: 0 15px;
  }
`;

const DropdownBlock = styled.div`
  padding-left: 30px;
  display: none;
  @media (max-width: 1100px) {
    display: block !important;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 30px;
  @media (max-width: 860px){
   padding-left: 0;
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
  font-family: Averta Extra Bold, sans-serif;
  font-weight: bold;
  font-size: 25px;
  margin-top: 3px;
  @media (max-width: 717px){
    display: none;
  }
`;

const Dota = styled.div`
  background: #2f3647;
  width: 90px;
  height: 90px;
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
  border-right: 1px solid #eaeef1;
  
  &:hover {
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      background: #2db2f0;
      bottom: 0;
    }
  }
  cursor: pointer;
  min-width: 206px;
  position: relative;
  @media (max-width: 1389px){
    flex-direction: column;
    padding: 0;
    min-width: 160px;
  }
  @media (max-width: 1200px){
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
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ContainerInfo = styled.div`
  @media (max-width: 1389px){
    text-align: center;
  }
`;

const BonusesTitle = styled.div`
  font-size: 16px;
  color: #2db2f0;
  font-family: Muller_Bold, sans-serif;
`;

const BonusesText = styled.div`
  font-size: 14px;
  color: #92cfec;
  font-family: Muller_Regular, sans-serif;
`;

const BonusesImage = styled.img`
  width: 23px;
  height: 23px;
`;

const Intuition = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-right: 1px solid #eaeef1;
  
  &:hover {
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      background: #0656f9;
      bottom: 0;
    }
  }
  cursor: pointer;
  min-width: 206px;
  position: relative;
  @media (max-width: 1389px) {
    flex-direction: column;
    padding: 0;
    min-width: 160px;
  }
  @media (max-width: 1200px) {
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
  align-items: center;
  justify-content: center;
  display: flex;
`;

const IntuitionTitle = styled.div`
  font-size: 16px;
  color: #0656f9;
  font-family: Muller_Bold, sans-serif;
`;

const IntuitionText = styled.div`
  font-size: 14px;
  color: #729dff;
  font-family: Muller_Regular, sans-serif;
`;


const IntuitionImage = styled.img`
  width: 29px;
  height: 29px;
`;

const UserContainer = styled.div`
  padding: 0 30px;
  height: 90px;
  display: flex;
  align-items: center;
  @media (max-width: 860px){
    padding-right: 0;
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
  &:hover {
    background: #333f51;
  }
   @media (max-width: 500px){
    height: 35px;
     width: 120px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
const WrapperRates = styled.div`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: Muller_Med, open-sans;
  margin: 0 10px 0 0;
`;

const HeaderServices = styled.div`
  display: flex;
`;

const RatesImage= styled.img`
  width: 23px;
  height: 23px;
`;

const NavBarMenu = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderServices>
          <Logo>
            <LogoImage>
              <Img src={ logo } alt=""/>
            </LogoImage>
            <NavBarMenu>
              <NavDropdown />
            </NavBarMenu>
            <LogoText>
              CSGO.bet
            </LogoText>
          </Logo>
          <Dota>
            <DotaIcon/>
          </Dota>
          <Bonuses>
            <BonusesWrapper>
              <BonusesImage src={bonuses}/>
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
              <IntuitionImage src={intuition}/>
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
        </HeaderServices>
        <UserContainer>
          <DropdownBlock>
            <Dropdown items={languages} />
          </DropdownBlock>
          <Rates>
            <WrapperRates>
              <RatesImage src={rates}/>
            </WrapperRates>
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
