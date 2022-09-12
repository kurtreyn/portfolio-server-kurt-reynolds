import React, { useEffect } from 'react';

export default function BreakingRecords({
  highLowScores,
  highScore,
  highScoreCount,
  lowScore,
  lowScoreCount,
  score,
}) {
  // useEffect(() => {}, [score]);

  return (
    <div>
      <code className="function-name">
        function breakingRecords(scores)&#123;
      </code>
      <code className="function-body">
        <br />
        <span>let highLowScores = &#91;{highLowScores}&#93;</span>
        <span>let highScore = scores&#91;{highScore}&#93;</span>
        <span>let highScoreCount = {highScoreCount}</span>
        <span>let lowScore = scores&#91;{lowScore}&#93;</span>
        <span>let lowScoreCount = {lowScoreCount}</span>
        <span>let games = scores.length</span>

        <br />
        <span>for (let score of scores)&#123; </span>
        <span>
          if(score:${score} &#62; highScore:{highScore})&#123;
        </span>
        <span>
          highScore = score
          <br />
          highScoreCount++
        </span>
        <span style={{ marginLeft: '5px' }}> &#125;</span>
        <span> &#125;</span>

        <br />
        <span>for (let score of scores)&#123; </span>
        <span>if(score &#60; highScore)&#123;</span>
        <span>
          lowScore = score
          <br />
          lowScoreCount++
        </span>
        <span style={{ marginLeft: '5px' }}> &#125;</span>
        <span> &#125;</span>

        <br />
        <span>highLowScores.push(highScoreCount)</span>
        <span>highLowScores.push(lowScoreCount)</span>
        <span>return highLowScores</span>
      </code>
      <code className="function-close">&#125;</code>
      <br />
      <code>let scoresArray = &#91;10, 5, 20, 20, 4, 5, 2, 25, 1&#93;</code>
    </div>
  );
}
