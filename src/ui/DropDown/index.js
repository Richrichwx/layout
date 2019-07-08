import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import arrow from '../../assets/arrow.svg';

import useDropdown from '../../hooks/use-dropdown';

const Container = styled.div`
  position: relative;
`;

const Icon = styled.img`
  width: 23px;
  height: 19px;
  flex: 0;
`;

const List = styled.div`
  position: absolute;
  box-shadow: 0px 40px 67px 0px rgba(79,113,154,0.18);
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${props => props.dropOpen ? '2px solid #e8ebf5' : 'none'};
  padding: 10px;
  background: #fff;
  border-bottom: ${props => props.dropOpen ? '2px solid #f1f3f6' : '1px solid #e8ebf5'};
  &:nth-last-child(1) {
    border-bottom: ${props => props.dropOpen ? '2px solid #f1f3f6' : 'none'};
  }
  &:hover {
    cursor: pointer;
  }
`;

const ItemSelected = styled(Item)`
  border-bottom: ${props => props.dropOpen ? '2px solid #f1f3f6' : '1px solid #e8ebf5 !important'};
`;

const Title = styled.div`
  font-size: 14px;
  font-family: Muller_Med, open-sans;
  height: 12px;
  color: #3c4252;
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
`;

const Arrow = styled.img`
  width: 9px;
`;

const ValueContainer = styled.div`
  box-shadow: ${props => !props.dropOpen ? '0px 18px 67px 0px rgba(79, 113, 154, 0.18)' : 'none'}
`;

export const Dropdown = ({ items, icon }) => {
  const coutriesEl = useRef(null);
  const countriesDropEl = useRef(null);
  const [activeItem, setActiveItem] = useState(items[0]);
  const [dropOpen, toggleCountriesDrop] = useDropdown(
    countriesDropEl,
    coutriesEl
  );
  const changeValue = item => {
    if (item && item.value) {
      setActiveItem(item);
    }

    return toggleCountriesDrop();
  };

  return (
    <Container>
      <ValueContainer dropOpen={dropOpen} ref={coutriesEl} onClick={changeValue}>
        <ItemSelected dropOpen={dropOpen}>
          <Icon src={icon ? icon : activeItem.icon} alt=""/>
          <Title>{activeItem.title}</Title>
          <Arrow src={arrow} alt=""/>
        </ItemSelected>
      </ValueContainer>
      <List ref={countriesDropEl} hidden={dropOpen}>
        {items && items.map((item, i) => (
          <Item key={i} onClick={() => changeValue(item)}>
            {item.icon && (
              <Icon src={item.icon} alt=""/>
            )}
            <Title>{item.title}</Title>
          </Item>
        ))}
      </List>
    </Container>
  );
};
