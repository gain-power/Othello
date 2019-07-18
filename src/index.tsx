import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square= () => <div className='stone' />

const Board = () => {
  <div className='board'>
  
  </div>
}

const Othello = () => {

  return (
    <div className='main'>
      <div className='board'>
        <Board></Board>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Othello />,
  document.getElementById('root')
);

