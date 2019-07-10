import React from 'react';
import styled from 'styled-components';

import support from '../../assets/support.svg';
import worldIcon from '../../assets/world.svg';

import { SocialIconsSteam, SocialIconsTelegram, SocialIconsVk } from '../../ui/icons/SocialIcons';

import { Dropdown } from '../../ui/DropDown';

import { languages } from '../../mocks/languages';
import { times } from '../../mocks/times';

const NavbarContainer = styled.div`
  width: 100%;
  background: #ffffff;
  height: 90px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavbarWrapper = styled.div`
  padding: 0 70px;
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: space-between;
  @media (max-width: 860px) {
    padding: 0 10px;
  }
`;

const Support = styled.div`
  width: 40px;
  height: 40px;
  background: #7d8ea0;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
   &:hover {
     background: #0075f3;
     width: 42px;
     height: 42px;
   }
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SupportImage= styled.img`
  width: 22px;
  height: 22px;
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 0 25px;
  @media (max-width: 1300px) {
    padding: 0 14px;
  }
  a {
    color: #4c5768;
    font-size: 16px;
    text-decoration: none;
    font-family: Muller_Bold, sans-serif;
    @media (max-width: 860px) {
      font-size: 11px;
    }
    &:hover {
      border-bottom: 2px solid #0656f9;
    }
    padding-bottom: 35px;
  }
`;
const Social = styled.div`
  display: flex;
  &:hover {
    svg {
      fill: #1b2129;
      cursor: pointer;
    }
  }
`;

const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
`;

const SupportWrapper = styled.div`
  width: 50px;
  height: 40px;
`;

const BarRight = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownBlock = styled.div`
  padding-left: 30px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <WrapperMenu>
          <SupportWrapper>
            <Support>
              <SupportImage src={support}/>
            </Support>
          </SupportWrapper>
        <Menu>
          <Wrapper>
            <a href="/#">Ставки</a>
          </Wrapper>
          <Wrapper>
            <a href="/#">Новости</a>
          </Wrapper>
          <Wrapper>
            <a href="/#">Рейтинги</a>
          </Wrapper>
          <Wrapper>
            <a href="/#">Скидки</a>
          </Wrapper>
          <Wrapper>
            <a href="/#">Техподдержка</a>
          </Wrapper>
          <Wrapper>
            <a href="/#">Как это работает?</a>
          </Wrapper>
        </Menu>
        </WrapperMenu>
        <BarRight>
          <Social>
            <SocialIconsTelegram/>
          </Social>
          <Social>
            <SocialIconsSteam/>
          </Social>
          <Social>
            <SocialIconsVk/>
          </Social>
          <DropdownBlock>
            <Dropdown items={times} icon={worldIcon} />
          </DropdownBlock>
          <DropdownBlock>
            <Dropdown items={languages} />
          </DropdownBlock>
        </BarRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
