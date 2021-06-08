import React, { useState, useEffect } from 'react';
import PlayerCard from '../../components/PlayerCard';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Menu, Dropdown, Button } from 'antd';
import {
  DownOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import SelectedPlayer from '../../components/SelectedPlayer';
import { getPlayersData } from '../../api';
import {
  Container,
  ContentContainer,
  PlayerDetails,
  Filters,
  Search,
} from './elements';

function Players() {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [playersData, setPlayersData] = useState([]);
  const [searchedPlayers, setSearchedPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchString, setSearchString] = useState('');

  const fetchData = async () => {
    try {
      const response = await getPlayersData();
      setPlayersData(response.data);
      setSearchedPlayers(response.data);
    } catch (error) {
      console.log(`error`, error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sortPlayers = (e) => {
    e.key === '1' //ascending
      ? setSearchedPlayers([
          ...playersData.sort((a, b) => a.real_name.localeCompare(b.real_name)),
        ])
      : setSearchedPlayers([
          //decending
          ...playersData.sort((b, a) => a.real_name.localeCompare(b.real_name)),
        ]);
  };

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    setSearchedPlayers([
      ...playersData.filter((item) =>
        item.real_name.toLowerCase().startsWith(e.target.value.toLowerCase())
      ),
    ]);
  };
  const sortMenu = (
    <Menu onClick={sortPlayers}>
      <Menu.Item key="1" icon={<SortAscendingOutlined />}>
        Ascending
      </Menu.Item>
      <Menu.Item key="2" icon={<SortDescendingOutlined />}>
        Decending
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <PlayerDetails displayDetails={displayDetails}>
        <SelectedPlayer
          displayDetails={displayDetails}
          selectedPlayer={selectedPlayer}
          setDisplayDetails={setDisplayDetails}
        />
      </PlayerDetails>

      <Filters>
        <Dropdown overlay={sortMenu}>
          <Button
            style={{ width: 320, height: 40, border: '1px solid lightGrey' }}
          >
            Sort The Players <DownOutlined />
          </Button>
        </Dropdown>
        <Search
          placeholder={'search'}
          value={searchString}
          onChange={handleSearch}
        />
      </Filters>
      <ContentContainer key={playersData}>
        {searchedPlayers.map((item, index) => {
          return (
            <PlayerCard
              key={item.id}
              player={item}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
              setDisplayDetails={setDisplayDetails}
              displayDetails={displayDetails}
            />
          );
        })}
      </ContentContainer>
    </Container>
  );
}

export default Players;
