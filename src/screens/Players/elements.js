import Styled from 'styled-components';
const Container = Styled.div`
    flex:1;
    min-height:100vh;
    padding-left: 100px;
    padding-right:100px;
    @media (max-width: 768px){
        padding-left: 20px;
    padding-right:20px;
    }
`;
const ContentContainer = Styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex:1;
    background-color: #F6F6F6;
`;

const PlayerDetails = Styled.div`
    background-color: #F6F6F6;
    width: 100%;
    height: ${(props) => (props.displayDetails ? '300px' : '0px')};
    transition: height 1s;
    border-radius:10px;
    border:${(props) =>
      props.displayDetails ? '1px solid lightGrey' : 'none'};
    margin-top:20px;
`;
const Filters = Styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    margin-left:10px; 
    margin-top:30px;
    @media (max-width: 768px){
        flex-direction:column;

    }
`;

const Search = Styled.input`
    width:320px;
    height: 40px;
    border-radius: 5px;
    margin-left: 20px;
    border: 1px solid lightGrey;
    font-size: 20px;
    padding-left:10px;
    &:hover{
        border: 1px solid black;
    }
    @media (max-width: 768px){
        margin-top:20px;
        margin-left:0px;
    }
`;

export { Container, ContentContainer, PlayerDetails, Filters, Search };
