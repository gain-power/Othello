import React from 'react';
import ReactDOM from 'react-dom';
import s from './index.module.css';
import Board from './components/board/Board';

const Othello: React.FC = () => (
  <div className={s.main}>
    <div className="control" />
    <div className="board">
      <Board />
    </div>
  </div>
);

// ========================================

ReactDOM.render(
  <Othello />,
  document.getElementById('root'),
);
