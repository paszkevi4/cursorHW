import React from 'react';

const BtnBlock = (props) => {
  return (
    <div className="card-action">
      <a
        className="waves-effect green btn"
        onClick={() => {
          props.clickHandler();
        }}>
        {props.btnText ? props.btnText : 'Змiнити'}
      </a>
    </div>
  );
};

export const Card = (props) => {
  const { title, text, hide, clickHandler, btnText } = props;

  const textToP = (Text) => {
    return Text.map((el) => {
      if (Array.isArray(el)) {
        return <p>{textToP(el)}</p>;
      } else {
        return <span>{el + ' '}</span>;
      }
    });
  };

  const innerText = textToP(text);
  return (
    <div className="col s4">
      <div
        className="card"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="card-content">
          <p className="card-title">{title}</p>
          {innerText}
        </div>
        {hide ? ' ' : <BtnBlock clickHandler={clickHandler} btnText={btnText} />}
      </div>
    </div>
  );
};
