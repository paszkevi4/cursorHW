import React from 'react';
import { functions } from './functions';
import { Card } from '../../components/common/Card1';
import store from '../../Store/store';
import { useState } from 'react';

export const HomeWork2 = () => {
  const [lower, setNewLower] = useState(store.hw2.LOWER);
  const [higher, setNewHigher] = useState(store.hw2.HIGHER);
  const [skipEven, setNewSkip] = useState(store.hw2.SKIP_EVEN);

  const clickHandler = () => {
    setNewLower(functions.numberSetter('Від якого числа небхідно складати?'));
    setNewHigher(functions.numberSetter('Do якого числа небхідно складати?'));
    setNewSkip(window.confirm('Чи потрiбно пропускати парнi?'));
  };

  return (
    <div className="row">
      <Card
        title="HW #2"
        clickHandler={clickHandler}
        text={[
          `Сума всiх ${skipEven ? 'непарних' : ''} чисел`,
          `від ${lower} до ${higher}`,
          `дорівнює ${functions.counter(lower, higher, skipEven)}`,
        ]}
      />
    </div>
  );
};
