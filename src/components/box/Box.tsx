import React from 'react';
import classNames from 'classnames';
import s from './index.module.css';

type CircleProps = {
  position: string;
}
const Circle: React.FC<CircleProps> = (props) => {
  const { position } = props;
  return <div className={classNames(s.circle, position)} />;
};
const positions = [s.top_left, s.top_right, s.btm_left, s.btm_right];

const Box: React.FC = () => (
  <div className={s.box}>{positions.map(v => <Circle position={v} />)}</div>
);

export default Box;
