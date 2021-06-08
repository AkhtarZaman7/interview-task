import React from 'react';
import PlayerCard from '../../components/PlayerCard';
import Styled from 'styled-components';
const ContentContainer = Styled.div``;
const ContentContainer = Styled.div` 
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        padding-left: 100px;
        padding-right:100px;
        align-items: center;
        justify-content: space-around;
        display: flex;
        flex:1;
        background-color: #F6F6F6;
    `;

function Players() {
  return (
    <ContentContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return <PlayerCard key={index} />;
      })}
    </ContentContainer>
  );
}

export default Players;
