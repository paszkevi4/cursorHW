import React from 'react';

export const Card = (props) => {
  const textId = 'card' + props.id;
  const btnId = 'btn' + props.id;
  const arrToStr = (arr) => {
    return arr.join(' ');
  };
  return (
    <div className="col s4">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          {props.text.map((el) => {
            // console.log(el, props.bestStudent);
            return <p id={textId}>{Array.isArray(el) ? arrToStr(el) : el}</p>;
          })}
        </div>
        {props.hide ? (
          ' '
        ) : (
          <div className="card-action">
            <a
              id={btnId}
              className="waves-effect green btn"
              onClick={() => {
                props.clickHandler();
              }}>
              Змiнити
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
