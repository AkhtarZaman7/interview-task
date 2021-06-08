import React, { useEffect, useState } from 'react';
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
  const [divider, setDivider] = useState(3);
  useEffect(() => {
    if (width < 1070 && width > 769) {
      setDivider(2);
    } else if (width < 769) {
      setDivider(1);
    } else {
      setDivider(3);
    }
  }, [width]);

  return (
    <Container
      width={width / divider - 130 + 'px'}
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
