import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrainCard from './TrainCard';
import SingleTrainPage from './SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="title">Train Schedule</h1>
        <Route exact path="/">
          {trainsData.map((train, index) => (
            <TrainCard key={index} train={train} />
          ))}
        </Route>
        <Route path="/train/2344">
          <SingleTrainPage />
        </Route>
      </div>
    </Router>
  );
};

export default App;
