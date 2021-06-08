import React, { useState } from 'react';
import {
  Assets,
  RealName,
  PlayerName,
  PlayerData,
  PlayerImage,
  Container,
  ButtomHolder,
} from './elements';
import { Alert, Button } from 'antd';

function SelectedPlayer({ displayDetails, selectedPlayer, setDisplayDetails }) {
  const [loading, setLoading] = useState(false);
  const [submitText, setSubmitText] = useState('Submit');

  const onPressSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitText('Submitted');
      setTimeout(() => {
        setDisplayDetails(false);
        setSubmitText('Submit');
      }, 1000);
    }, 2000);
  };
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
        <ButtomHolder>
          <Button
            type="primary"
            size="large"
            loading={loading}
            style={{
              backgroundColor: 'black',
              width: 250,
              display: displayDetails ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={onPressSubmit}
          >
            {submitText}
          </Button>
        </ButtomHolder>
      </PlayerData>
    </Container>
  );
}

export default SelectedPlayer;
