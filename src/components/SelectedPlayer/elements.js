import Styled from 'styled-components';
import { truncate } from '../../utils';

const Container = Styled.div`
   flex:1;
   display: flex;
   padding:20px;
   flex-direction:row;
   transition: display 1s;
   
`;
const PlayerImage = Styled.img`
  height: ${(props) => (props.displayDetails ? '250px' : '0px')};
  width: 250px;
  border-radius: 10px;
  transition: height 1s;

`;

const PlayerData = Styled.div`
  margin-left:30px;
  width: 70%;
`;
const RealName = Styled.p`
    ${truncate('80%')}
    font-size:${(props) => (props.displayDetails ? '40px' : 0)};;
    transition: font-size 1s;
    font-weight:700;
    margin:0px ;
    color:black;
    cursor: pointer;

`;
const PlayerName = Styled.p`
    font-size:${(props) => (props.displayDetails ? '30px' : 0)};;
    transition: font-size 1s;
    font-weight:500;
    margin-top:5px ;
    margin-bottom: 0px;
    color: grey;
    ${truncate('80%')}
    cursor: pointer;


`;
const Assets = Styled.p`
    font-size:${(props) => (props.displayDetails ? '20px' : 0)};;
    transition: font-size 1s;
    margin-top:5px ;
    color:black;
    ${truncate('80%')}
    cursor: pointer;
`;
const SubmitButton = Styled.div`
    width:250px;
    background-color:rgba(0,0,0,.7);
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    cursor: pointer;
    height: ${(props) => (props.displayDetails ? '40px' : '0px')};

    &:hover{
        background-color:rgba(0,0,0,.9);

    }
`;
const BtnText = Styled.p`
    font-size:20px;
    color:white;
    margin:0px;
    
`;
export {
  Assets,
  RealName,
  PlayerName,
  PlayerData,
  PlayerImage,
  Container,
  SubmitButton,
  BtnText,
};
