import React from 'react';
import style from './square.module.sass';

export const Square = (props) => {
  return <div className={style.square} style={{ backgroundColor: props.color }}></div>;
};
