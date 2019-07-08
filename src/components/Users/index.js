import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.png';
import { DepositIcon } from '../../ui/icons/DepositIcon';
import { SocialIconsSteamUser } from '../../ui/icons/SocialIcons';

const UserContainer = styled.div`
 margin-left: 25px;
 display: flex;
`;

const LoginTrue = styled.div`
  display: flex;
`;

const Avatar = styled.div`

`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 500px){
    width: 45px;
    height: 45px;
  }
`;

const Userinfo= styled.div`
  margin-left: 10px;
  width: 122px;
`;

const UserName= styled.div`
  font-size: 16px;
  color: #27303b;
  font-weight: bold;
  margin-bottom: 10px;
   @media (max-width: 500px){
    font-size: 12px;
    margin: 5px 0 5px 0;
  }
`;

const Money= styled.div`
  font-size: 19px;
  color: #17c06d;
  font-weight: bold;
   @media (max-width: 500px){
    font-size: 12px;
  }
`;

const Deposit= styled.div`
  width: 45px;
  height: 45px;
  background: #17c06d;
  border-radius: 50%;
  margin:3px 0 0 50px;
  cursor: pointer;
   &:hover {
      background: #68f1ad;
   }
   @media (max-width: 1200px){
    margin-left: 10px;
  }
`;

const LoginFalse = styled.div`
  display: flex;
  width: 260px;
  height: 92px;
  background: #242a38;
  justify-content: center;
  align-items:center;
  margin-left: 70px;
`;

const SteamContainer= styled.div`
  width: 50px;
  height: 50px;
  background: #0656f9;
  border-radius: 50%;
  display: flex;
  margin-right: 20px;
`;

const LogOutText= styled.div`
`;
const LogOut= styled.div`
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 5px;
`;

const LogOutSteamText= styled.div`
  ont-size: 18px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;


function User() {
  let login = true;
  return (
    <UserContainer>
      {login ? (
        <LoginTrue>
          <Avatar>
            <Img src={avatar}/>
          </Avatar>
          <Userinfo>
            <UserName>
              Виктор Павлов
            </UserName>
            <Money>
              8 608.50 Р
            </Money>
          </Userinfo>
          <Deposit>
            <DepositIcon/>
          </Deposit>
        </LoginTrue>
      ) : (
        <LoginFalse>
          <SteamContainer>
            <SocialIconsSteamUser />
          </SteamContainer>
            <LogOutText>
              <LogOut>
                Войти
              </LogOut>
              <LogOutSteamText>
                ЧЕРЕЗ STEAM
              </LogOutSteamText>
            </LogOutText>
        </LoginFalse>
      )}
    </UserContainer>
  );
}

export default User;