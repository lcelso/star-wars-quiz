import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = ({ icon, height, width }) => (
  <Loader
    type={icon}
    color="#00BFFF"
    height={height}
    width={width}
  />
);

export default Loading;
