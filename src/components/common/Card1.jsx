import React from 'react';

const BtnBlock = (props) => {
  return (
    <div className="card-action">
      <a
        className="waves-effect green btn"
        onClick={() => {
          props.clickHandler();
        }}>
        Змiнити
      </a>
    </div>
  );
};

export const Card = (props) => {
  const { title, text, hide } = props;
  const innerText = text.map((el) => {
    return <p>{el}</p>;
  });
  return (
    <div className="col s4">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">{title}</span>
          {innerText}
        </div>
        {hide ? ' ' : <BtnBlock />}
      </div>
    </div>
  );
};
