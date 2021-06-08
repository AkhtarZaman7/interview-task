import React from 'react';
import {
  Assets,
  RealName,
  PlayerName,
  PlayerData,
  PlayerImage,
  Container,
  SubmitButton,
  BtnText,
} from './elements';

function SelectedPlayer({ displayDetails, selectedPlayer }) {
  return (
    <Container displayDetails={displayDetails}>
      <PlayerImage
        src="https://picsum.photos/200/300/?blur=2"
        displayDetails={displayDetails}
      />
      <PlayerData>
        <RealName displayDetails={displayDetails}>
          {selectedPlayer?.real_name}
        </RealName>
        <PlayerName displayDetails={displayDetails}>
          @{selectedPlayer?.player_name}
        </PlayerName>
        <Assets displayDetails={displayDetails}>{selectedPlayer?.asset}</Assets>
        <SubmitButton displayDetails={displayDetails}>
          <BtnText>Submit Player </BtnText>
        </SubmitButton>
      </PlayerData>
    </Container>
  );
}

export default SelectedPlayer;
