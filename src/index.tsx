import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square= () => {
  return (
    <button className="square">
    </button>
  );
}

const Board = () => { 
  
  const renderSquare = (i: number) => <Square />;

  const createRow =(firstNum: number)=> {
    const squares = () => {
      const square: JSX.Element[] = [];
      for (const max = firstNum + 8; firstNum < max; firstNum++){
        square.push(renderSquare(firstNum));
      }

      return square;
    }

    return (
      <div className="board-row">
        {squares()}
      </div>
    );
  }

  const arr = [0, 8, 16, 24, 32, 40, 48, 56, 64];

  return (
    <div>
      {arr.map(v => createRow(v))}
    </div>
  );
}

const Game = () => { 
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

