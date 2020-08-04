import React from 'react';
import s from './hw6.module.sass';

export const HomeWork6 = () => {
  return (
    <div>
      <div className={s.dropdown}>
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>First
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li class="active">
          <div class="collapsible-header">
            <i class="material-icons">place</i>Second
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">whatshot</i>Third
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
});
