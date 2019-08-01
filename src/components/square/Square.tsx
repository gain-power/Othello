import React from 'react';
import s from './index.module.css';
import { BlackStone } from '../stone/Stone';

const Square: React.FC = () => (<div className={s.square} onClick={() => alert('square')}><BlackStone /></div>);

export default Square;
