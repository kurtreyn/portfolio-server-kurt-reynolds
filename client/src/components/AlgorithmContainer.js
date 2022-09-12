import React, { useState } from 'react';
import Button from './Button';
import BreakingRecords from './algorithms/breakingrecords';
import '../styles/algorithmContainerStyle.css';

export default function AlgorithmContainer() {
  const [disable, setDisable] = useState(false);
  const [started, setStarted] = useState(false);
  let counter = 0;

  const handleNext = () => {
    ++counter;
    console.log('counter', counter);
  };

  const handlePrevious = () => {
    if (counter === 0) {
      setDisable(true);
    } else {
      --counter;
    }
    console.log('counter', counter);
  };

  let scoresArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];

  let highLowScores = [];
  let highScore;
  let highScoreCount = 0;
  let lowScore;
  let lowScoreCount = 0;
  let games;
  let score = counter;

  const breakingRecordsFunction = (scores) => {
    highScore = scores[counter];
    lowScore = scores[counter];
    games = scores.length;

    if (counter === scores.length) {
      setDisable(true);
    }

    if (scores[counter] > highScore) {
      highScore = scores[counter];
      highScoreCount++;
    }

    if (scores[counter] < lowScore) {
      lowScore = scores[counter];
      lowScoreCount++;
    }

    highLowScores.push(highScoreCount);
    highLowScores.push(lowScoreCount);
  };

  console.log(
    `highLowScores: ${highLowScores}, highScore: ${highScore}, highScoreCount: ${highScoreCount}, lowScoreCount: ${lowScoreCount}, games: ${games},score: ${score}`
  );

  const startFunction = () => {
    setStarted(true);
    breakingRecordsFunction(scoresArray);
  };

  return (
    <div className="algorithm-container">
      <div className="algorithms-left-side">
        <BreakingRecords
          highLowScores={highLowScores}
          highScore={highScore}
          highScoreCount={highScoreCount}
          lowScore={lowScore}
          lowScoreCount={lowScoreCount}
          score={score}
          setDisable={setDisable}
        />
      </div>
      <div className="algorithms-right-side">
        <div className="control-buttons">
          {!started && (
            <Button label="Start" disabled={disable} onClick={startFunction} />
          )}
          {started && (
            <Button
              label="Previous"
              disabled={disable}
              onClick={handlePrevious}
            />
          )}
          {started && (
            <Button label="Next" disabled={disable} onClick={handleNext} />
          )}
        </div>

        <div className="content-monitor">Content Monitor</div>
      </div>
    </div>
  );
}
