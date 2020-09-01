import React from 'react';

import { Card, Button } from 'react-bootstrap';

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
    <div className="col-sm-6">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button clickHandler={decrease} btnText="-">
            -
          </Button>
          <Button clickHandler={increase} btnText="+" />
          <Button variant="primary">Primary</Button>{' '}
        </Card.Body>
      </Card>
      ;
      {/* <div
        className="card"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div class="card-body">
          <p className="card-title">{title}</p>
          <p style={{ fontSize: `${text}px` }} class="card-text">
            {text}
          </p>
          <div className="card-action" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <BtnBlock clickHandler={decrease} btnText="-" />
            <BtnBlock clickHandler={increase} btnText="+" />
          </div>
        </div>
      </div> */}
    </div>
  );
};
