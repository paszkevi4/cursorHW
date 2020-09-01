import React from 'react';
import style from '../../hw9/Square/square.module.sass';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const DropDown = () => {
  return (
    <div>
      <a className="waves-effect light-green lighten-2 waves-light btn col s1" onClick="">
        <span>-1-</span>
      </a>
      <a className="waves-effect light-green waves-light btn col s3" onClick="">
        <span>GET MOVIES</span>
      </a>
    </div>
  );
};

let Search = (props) => {
  return (
    <div className="row">
      <Dropdown as={ButtonGroup}>
        <Button variant="success">Split Button</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="col s6 offset-s3 btn-container">
        <DropDown />
        <a
          className="waves-effect waves-light btn "
          onClick={() => {
            props.func(1);
          }}>
          GET PLANETS
        </a>
        <a
          className="waves-effect waves-light btn "
          onClick={() => {
            props.func(1);
          }}>
          GET PLANETS
        </a>
      </div>
    </div>
  );
};

export default Search;
