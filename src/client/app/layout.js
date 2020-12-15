import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavLink to="/index" style={{ marginLeft: '10px' }}>
          首页
        </NavLink>
        <NavLink style={{ marginLeft: '10px' }} to="/list">
          列表页
        </NavLink>
        <div>{this.props.children}</div>
      </div>
    );
  }
}