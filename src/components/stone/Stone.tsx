import React from 'react';
import className from 'classnames';
import s from './index.module.css';

type StoneProps = {
  color: string;
}

const Stone: React.FC<StoneProps> = (props) => {
  const { color } = props;
  // eslint-disable-next-line no-alert
  return <div className={className(s.stone, color)} onClick={() => alert('stone')} />;
};

export const BlackStone: React.FC = () => <Stone color={s.black} />;
export const WhiteStone: React.FC = () => <Stone color={s.white} />;
