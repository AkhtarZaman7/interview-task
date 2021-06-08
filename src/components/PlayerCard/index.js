import React from 'react';
import useWindowDimensions from '../../utils';
import {
  Assets,
  PlayerName,
  RealName,
  ProfileImage,
  BackgroundImage,
  ContentHolder,
  BgImageHolder,
  Container,
} from './elements';

function PlayerCard({
  displayDetails,
  setDisplayDetails,
  player,
  setSelectedPlayer,
  selectedPlayer,
}) {
  const { width } = useWindowDimensions();
  return (
    <Container
      width={width / 3 - 130 + 'px'}
      onClick={() => {
        if (player === selectedPlayer) {
          setDisplayDetails(!displayDetails);
        } else {
          setSelectedPlayer(player);
          setDisplayDetails(true);
        }
      }}
    >
      <BgImageHolder>
        <BackgroundImage src="https://picsum.photos/200/300/?blur=2" />
      </BgImageHolder>
      <ContentHolder>
        <ProfileImage src="https://picsum.photos/seed/picsum/200/300" />
        <RealName className="text_cascading">{player.real_name}</RealName>
        <PlayerName>@{player.player_name}</PlayerName>
        <Assets>{player.asset}</Assets>
      </ContentHolder>
    </Container>
  );
}

export default PlayerCard;
