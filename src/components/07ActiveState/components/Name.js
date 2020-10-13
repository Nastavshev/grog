import React, { useState } from 'react';
import style from './Name.module.css';

export const Name = (props) => {
  const { name, index, active, setActive } = props;
  return (
    <div onClick={() => setActive(index)} className={`${style.notActive} ${index === active && style.active}`}>{name}</div>
  );
};
