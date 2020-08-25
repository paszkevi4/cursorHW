import React, { useState, useRef } from 'react';
import { Card } from '../../components/common/Card1';
import { FontCard } from './FontCard';
import { fontGenerator } from './generators';

export const HomeWork13 = () => {
  let [generatorValue, setGeneratorValue] = useState(0);
  let [fontSize, setFontSize] = useState(fontGenerator.next().value);
  const state = useRef([]);

  function* infiniteGenerator() {
    while (true) {
      setGeneratorValue(++generatorValue);
      yield generatorValue;
    }
  }
  const idGenerator = infiniteGenerator();

  const clickHandler = () => {
    let u = idGenerator.next().value;
    state.current = [...state.current, u];
  };

  window.idGenerator = idGenerator;
  window.state = state;
  window.fontGenerator = fontGenerator;

  return (
    <div className="row">
      <Card
        title="Unique ID generator"
        text={state.current}
        clickHandler={clickHandler}
        btnText="Додати новий id"
      />
      <FontCard
        title="Font size changer"
        text={fontSize}
        increase={() => {
          setFontSize(fontGenerator.next('up').value);
        }}
        decrease={() => {
          setFontSize(fontGenerator.next('down').value);
        }}
      />
    </div>
  );
};
