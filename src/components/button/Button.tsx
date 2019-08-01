import React from 'react';

type ButtonProps = {
  name: string;
  click: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { name, click } = props;
  return (
    <button type="button" onClick={click}>{name}</button>
  );
};

export default Button;
