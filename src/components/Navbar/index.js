import React from 'react';
import styled from 'styled-components';
import { SupportIcon } from '../../ui/icons/SupportIcon';
import { SocialIconsSteam, SocialIconsTelegram, SocialIconsVk } from '../../ui/icons/SocialIcons';

const NavbarContainer = styled.div`
  width: 100%;
  background: #ffffff;
  height: 90px;
  margin-top: 1px;
`;

const NavbarWrapper = styled.div`
  padding: 0 70px;
  display: flex;
  align-items: center;
  height: 90px;
`;

const Support = styled.div`
  width: 40px;
  height: 40px;
  background: #7d8ea0;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
`;

const Wrapper = styled.div`
  padding: 0 25px 0  25px;
  a {
    color: #4c5768;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      border-bottom: 2px solid #0656f9;
    }
    padding-bottom: 35px;
  }
`;
const Social = styled.div`
  margin-left: 280px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Support>
          <SupportIcon/>
        </Support>
        <Menu>
          <Wrapper>
            <a href="">Ставки</a>
          </Wrapper>
          <Wrapper>
            <a href="">Новости</a>
          </Wrapper>
          <Wrapper>
            <a href="">Рейтинги</a>
          </Wrapper>
          <Wrapper>
            <a href="">Скидки</a>
          </Wrapper>
          <Wrapper>
            <a href="">Техподдержка</a>
          </Wrapper>
          <Wrapper>
            <a href="">Как это работает?</a>
          </Wrapper>
        </Menu>
        <Social>
          <SocialIconsTelegram/>
          <SocialIconsSteam/>
          <SocialIconsVk/>
        </Social>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;