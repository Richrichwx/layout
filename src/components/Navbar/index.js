import React from 'react';
import styled from 'styled-components';
import { SocialIconsSteam, SocialIconsTelegram, SocialIconsVk } from '../../ui/icons/SocialIcons';
import support from '../../assets/support.svg';

import { Dropdown } from '../../ui/DropDown';

import worldIcon from '../../assets/world.svg';

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
  justify-content: space-between;
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
  width: 867px;
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
  height: 50px;
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const BarRight = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownBlock = styled.div`
  padding-left: 30px;
`;

const languages = [
  {
    title: 'EN',
    icon: 'https://betscsgo.gg/images/lang_flags/en.png',
    value: 'en'
  },
  {
    title: 'RU',
    icon: 'https://betscsgo.gg/images/lang_flags/ru.png',
    value: 'ru'
  },
  {
    title: 'DE',
    icon: 'https://betscsgo.gg/images/lang_flags/de.png',
    value: 'de'
  }
];

const times = [
  {
    title: '8:44',
    value: 'en',
  },
  {
    title: '10:00',
    value: 'ru',
  },
  {
    title: '21:00',
    value: 'de',
  }
];

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
        </WrapperMenu>
        <BarRight>
          <Social>
            <SocialIconsTelegram/>
            <SocialIconsSteam/>
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
