import React, { useRef } from 'react';
import styled from 'styled-components';

import cubIcon from '../../assets/cub.svg';
import currIcon from '../../assets/curr.svg';
import upIcon from '../../assets/up.svg';
import historyIcon from '../../assets/history.svg';
import promoIcon from '../../assets/promo.svg';
import accIcon from '../../assets/acc.svg';
import logOutIcon from '../../assets/log_out.svg';
import closeIcon from '../../assets/close.svg';

import { MenuIcon } from '../../ui/icons/MenuIcon';

import useDropdown from '../../hooks/use-dropdown';

const Container = styled.div`
  padding-left: 20px;
  position: relative;
`;

const Icon = styled.img`
  width: 23px;
  height: 19px;
  padding-right: 4px;
  flex: 0;
`;

const List = styled.div`
  position: absolute;
  box-shadow: 0px 18px 67px 0px rgba(79, 113, 154, 0.18);
  width: 220px;
  right: -18px;
  z-index: 9;
  top: 31px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #fff;
  border-bottom: 1px solid #e8ebf5;
  position: relative;
  &:hover {
    cursor: pointer;
    img {
      filter: invert(53%) sepia(95%) saturate(1866%) hue-rotate(202deg) brightness(97%) contrast(107%);
    }
    &:after {
      content: '';
      background: #0b76ff;
      position: absolute;
      width: 2px;
      height: 100%;
      left: 0;
    }
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-family: Muller_Med, open-sans;
  height: 12px;
  color: #3c4252;
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
`;

const MenuLink = styled.div`
  &:hover {
    cursor: pointer;
    svg {
      fill: #6b7a8d;
    }
    img {
      filter: invert(51%) sepia(9%) saturate(766%) hue-rotate(173deg) brightness(90%) contrast(94%);
    }
  }
`;

const LogOut = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background: #0f1118;
  &:hover {
    cursor: pointer;
  }
`;

const TitleLogOut = styled.div`
  color: #fff;
  font-size: 15px;
  font-family: Muller_Med, open-sans;
`;

const ValueContainer = styled.div`
  box-shadow: ${props => !props.dropOpen ? '0px 18px 67px 0px rgba(79, 113, 154, 0.18)' : 'none'};
  width: 35px;
`;

const CloseImg = styled.img`
  width: 20px;
`;

export const MenuDropdown = (props) => {
  const dropEl = useRef(null);
  const itemsDropEl = useRef(null);
  const [dropOpen, toggleDrop] = useDropdown(
    itemsDropEl,
    dropEl
  );
  const changeValue = () => toggleDrop();

  return (
    <Container>
      <ValueContainer dropOpen={dropOpen} ref={dropEl} onClick={changeValue}>
        <MenuLink>
          {dropOpen ? <MenuIcon /> : <CloseImg src={closeIcon} alt=""/> }
        </MenuLink>
      </ValueContainer>
      <List ref={itemsDropEl} hidden={dropOpen}>
        <Item onClick={changeValue}>
          <Icon src={cubIcon} alt=""/>
          <Title>Мои ставки</Title>
        </Item>
        <Item onClick={changeValue}>
          <Icon src={currIcon} alt=""/>
          <Title>Пополнить баланс</Title>
        </Item>
        <Item onClick={changeValue}>
          <Icon src={upIcon} alt=""/>
          <Title>Вывести средства</Title>
        </Item>
        <Item onClick={changeValue}>
          <Icon src={historyIcon} alt=""/>
          <Title>История операций</Title>
        </Item>
        <Item onClick={changeValue}>
          <Icon src={promoIcon} alt=""/>
          <Title>Ввести промо-код</Title>
        </Item>
        <Item onClick={changeValue}>
          <Icon src={accIcon} alt=""/>
          <Title>Настройки аккаунта</Title>
        </Item>
        <LogOut onClick={changeValue}>
          <Icon src={logOutIcon} alt=""/>
          <TitleLogOut>Выйти из аккаунта</TitleLogOut>
        </LogOut>
      </List>
    </Container>
  );
};
