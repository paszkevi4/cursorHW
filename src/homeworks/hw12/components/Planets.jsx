import React, { useState } from 'react';

import style from '../../hw9/Square/square.module.sass';

function Planets({ text, currentPage, clickHandler }) {
  const [page, setPage] = useState(1);
  return (
    <div>
      {text}
      <div className={style.main}>
        <div className={style.btnGroup}>
          <a
            className="waves-effect waves-light btn"
            onClick={() => {
              clickHandler(--currentPage);
            }}>
            PREV
          </a>
          <a
            className="waves-effect waves-light btn"
            onClick={() => {
              clickHandler(++currentPage);
            }}>
            NEXT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Planets;

//onClick={() => {clickHandler(currentPage++)}
