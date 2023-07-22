import React from 'react';

const TrainCard = ({ train }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    padding: '10px',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const listItemStyle = {
    marginBottom: '5px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      <p>
        Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
      </p>
      <p>Seats Available:</p>
      <ul>
        <li style={listItemStyle}>Sleeper: {train.seatsAvailable.sleeper}</li>
        <li style={listItemStyle}>AC: {train.seatsAvailable.Ac}</li>
      </ul>
      <p>Price:</p>
      <ul>
        <li style={listItemStyle}>Sleeper: {train.price.sleeper}</li>
        <li style={listItemStyle}>AC: {train.price.AC}</li>
      </ul>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
};

export default TrainCard;
