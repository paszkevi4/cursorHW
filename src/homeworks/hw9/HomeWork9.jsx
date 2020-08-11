import React, { useState, useEffect } from 'react';
import style from './Square/square.module.sass';

import store from '../../Store/store';
import { Square } from './Square/Square';

const state = store.hw9.grandSquare;
const colors = store.hw9.colors;

export const HomeWork9 = () => {
  const [showBlocks, generateBlocks] = useState(false);
  const [blocksInterval, generateBlocksInterval] = useState(false);
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    if (blocksInterval) {
      setTimeout(() => {
        setEffect(!effect);
      }, 1000);
    }
  }, [effect, blocksInterval]);

  let board = null;
  const setBoard = () => {
    board = state.map((row) => (
      <div className={style.row}>
        {row.map((_cell, i) => (
          <Square key={i} color={colors[Math.floor(Math.random() * 11)]} />
        ))}
      </div>
    ));
  };
  setBoard();

  return (
    <div className={style.main}>
      <div className={style.btnGroup}>
        <a className="waves-effect waves-light btn" onClick={() => generateBlocks(!showBlocks)}>
          Generate blocks
        </a>
        <a
          className="waves-effect waves-light btn"
          onClick={() => generateBlocksInterval(!blocksInterval)}>
          Set interval
        </a>
      </div>
      <div className={style.grandSquare}>{showBlocks && board}</div>
    </div>
  );
};
