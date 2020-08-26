import React from 'react';

const BtnBlock = (props) => {
  return (
    <a
      className=" btn-floating waves-effect blue btn"
      onClick={() => {
        props.clickHandler();
      }}>
      {props.btnText}
    </a>
  );
};

export const FontCard = (props) => {
  const { title, text, increase, decrease } = props;

  return (
    <div className="col s12 m6 l4">
      <div
        className="card"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p style={{ fontSize: `${text}px` }}>{text}</p>
        </div>
        <div className="card-action" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <BtnBlock clickHandler={decrease} btnText="-" />
          <BtnBlock clickHandler={increase} btnText="+" />
        </div>
      </div>
    </div>
  );
};
