import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>home</div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/join">회원가입</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </>
  );
};

export default HomePage;
