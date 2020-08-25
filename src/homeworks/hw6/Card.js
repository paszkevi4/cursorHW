import React from 'react';

import './hw6.sass';

export const StudentsCard = (props) => {
  const textId = 'card' + props.id;
  const btnId = 'btn' + props.id;
  const arrToStr = (arr) => {
    return arr.join(': ');
  };
  const names = ['subjects', 'average', 'info'];
  return (
    <div className="col s4">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          {props.text.map((el, i) => {
            return (
              <p id={textId}>
                {Array.isArray(el) ? arrToStr(el) : el}
                {props.bestStudent && el == props.bestStudent ? (
                  <span className="new badge" data-badge-caption="Best student"></span>
                ) : (
                  ''
                )}
              </p>
            );
          })}
        </div>
        <div className="card-action">
          <a
            id={btnId}
            className="waves-effect green btn"
            onClick={() => {
              props.clickHandler();
            }}>
            В алфавiтному порядку
          </a>
        </div>
      </div>
    </div>
  );
};
