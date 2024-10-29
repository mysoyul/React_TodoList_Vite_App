import React from 'react';
//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const divStyle = {
  margin: '0 auto',
  marginTop: '4rem',
  width: '512px'
};

const HistorySample = () => {
  const navigate = useNavigate();

  // 뒤로가기
  const handleGoBack = () => {
    navigate(-1);
  };

  // 홈으로 이동
  const handleGoHome = () => {
    navigate('/');
  };

  //useEffect(() => {
    //console.log('useEffect 호출됨!!');
    // const unblock = navigate.block(() => {
    //   window.confirm('정말 떠나실건가요?');
    //   return true;
    // });
    //return () => {
      //unblock();
    //}  
  //},[history]);

  return (
    <div style={divStyle}>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;