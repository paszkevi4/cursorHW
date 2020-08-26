import React, { useState, useRef } from 'react';
import { Card } from '../../components/common/Card1';
import { FontCard } from './FontCard';
import { fontGenerator } from './generators';

export const HomeWork13 = () => {
  let [state, setState] = useState([]);

  let [fontSize, setFontSize] = useState(fontGenerator.next().value);
  let generatorValue = useRef(0);

  function* infiniteGenerator() {
    while (true) {
      generatorValue.current++;
      yield generatorValue.current;
    }
  }
  const idGenerator = infiniteGenerator();

  const clickHandler = () => {
    let u = idGenerator.next().value;
    setState([...state, u]);
  };

  window.idGenerator = idGenerator;
  window.state = state;
  window.fontGenerator = fontGenerator;

  return (
    <div className="row">
      <Card
        title="Unique ID generator"
        text={state}
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
