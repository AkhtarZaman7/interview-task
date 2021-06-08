import Styled from 'styled-components';
import { truncate } from '../../utils';

const Container = Styled.div`
  height: 250px;
  width: ${(props) => props.width};
  border-radius: 10px;
  background-color: red;
  margin: 10px;
  flex-direction: column;
  transition: box-shadow 1s;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.5);
  }
`;
const BgImageHolder = Styled.div`
    background-color:white;
    height: 40%;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    /* background-image:url(${'https://picsum.photos/seed/picsum/200/300'}); */
`;
const ContentHolder = Styled.div`
    background-color:white;
    height: 60%;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

const BackgroundImage = Styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 100%;
  width:100%;
`;
const ProfileImage = Styled.img`
  height: 100px;
  width:100px;
  border-bottom-right-radius:100px;
  border-bottom-left-radius:100px;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  margin-top: -50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    }
`;

const RealName = Styled.p`
    ${truncate('60%')}
    font-size:20px;
    font-weight:700;
    margin:0px ;
    color:black;
    text-align:center;
    cursor: pointer;

`;
const PlayerName = Styled.p`
    font-size:15px;
    font-weight:500;
    margin-top:5px ;
    margin-bottom: 0px;
    color: grey;
    ${truncate('60%')}
    text-align:center;
    cursor: pointer;


`;
const Assets = Styled.p`
    font-size:12px;
    margin-top:5px ;
    color:black;
    ${truncate('60%')}
    text-align:center;
    cursor: pointer;
`;

export {
  Assets,
  PlayerName,
  RealName,
  ProfileImage,
  BackgroundImage,
  ContentHolder,
  BgImageHolder,
  Container,
};
