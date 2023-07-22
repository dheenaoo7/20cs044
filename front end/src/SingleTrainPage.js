import React from 'react';

const SingleTrainPage = ({ trainData }) => {
  return (
    <div className="container">
      <div className="section">
        <h2>Train Name: {trainData.trainName}</h2>
        <p>Train Number: {trainData.trainNumber}</p>
      </div>
      <div className="section">
        <h3>Departure Time:</h3>
        <p>
          {trainData.departureTime.Hours}:{trainData.departureTime.Minutes}:
          {trainData.departureTime.Seconds}
        </p>
      </div>
      <div className="section">
        <h3>Seats Available:</h3>
        <p>Sleeper: {trainData.seatsAvailable.sleeper}</p>
        <p>AC: {trainData.seatsAvailable.AC}</p>
      </div>
      <div className="section">
        <h3>Price:</h3>
        <p>Sleeper: {trainData.price.sleeper}</p>
        <p>AC: {trainData.price.AC}</p>
      </div>
      <div className="section">
        <h3>Delayed By:</h3>
        <p>{trainData.delayedBy} hours</p>
      </div>
    </div>
  );
};


export default SingleTrainPage;
