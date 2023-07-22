import React, { useEffect, useState } from 'react';
import TrainCard from './TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('localhost:3000/train/details')
      .then((response) => response.json())
      .then((data) => setTrains(data))
      .catch((error) => console.error('Error fetching trains:', error));
  }, []);

  return (
    <Grid container spacing={3}>
      {trains.map((train) => (
        <Grid item xs={12} sm={6} md={4} key={train.id}>
          <TrainCard train={train} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllTrainsPage;
