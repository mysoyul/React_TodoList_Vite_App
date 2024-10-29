import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const divStyle = {
  margin: '0 auto', 
  marginTop: '4rem',
  width: '512px'
};
const Profiles = () => {
  // const activeStyle = {
  //   background: 'black',
  //   color: 'white'
  // };
  return (
    <div style={divStyle}>
      <h2>사용자 목록:</h2>
      <ul>
        <li>
          <NavLink to="/profiles/dan" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
            Dan Abromov
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/evan" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
            Evan You
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;