import React from 'react';
// import {Background, LoadingText} from './Styles';
import { Background, LoadingText } from './Style';

export default () => {
  return (
    <Background>
      <img src={process.env.PUBLIC_URL + `/loading.gif`} />
    </Background>
  );
};