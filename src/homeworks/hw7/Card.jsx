import React from 'react';

export const Card = (props) => {
  const textId = 'card' + props.id;
  const btnId = 'btn' + props.id;
  return (
    <div class="col s4">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{props.title}</span>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
