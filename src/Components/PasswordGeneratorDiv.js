import React from 'react';
import Header from './Header';
import Main from './Main';

const PasswordGeneratorDiv = () => {
  return (
    <div className="w-11/12 max-w-[600px] my-5 bg-[#0C6B43] p-5 rounded-lg text-[#3DDBC4]">
      <Header />
      <Main />
    </div>
  );
};

export default PasswordGeneratorDiv;
