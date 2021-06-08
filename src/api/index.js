import data from './data.json';

const getPlayersData = () => {
  return new Promise((resolve, reject) => {
    resolve({ data: data.data });
  });
};

export { getPlayersData };
