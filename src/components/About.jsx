import React from 'react';
import MyComponentFunc from '@components/basic/MyComponentFunc';

const divStyle = {
  margin: '0 auto', 
  marginTop: '4rem',
  width: '512px'
};

const About = () => {
  return (
    <div style={divStyle}>
      <MyComponentFunc name="ReactJS" age={20}>
            <p>하위 엘리먼트</p>
      </MyComponentFunc>
    </div>
  );
};
export default About;