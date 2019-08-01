import React from 'react';
import s from './index.module.css';
import Square from '../square/Square';
import Box from '../box/Box';

const Row: React.FC = () => (
  <div className={s.row}>
    {[...Array(8)].map(() => <Square />)}
  </div>
);

const Board: React.FC = () => (
  <div className={s.board}>
    <Box />
    {[...Array(8)].map(() => <Row />)}
  </div>
);

export default Board;
