import React, { useState } from 'react';
import style from './Name.module.css';

export const Name = (props) => {
  const { name } = props;
  const [active, setActive] = useState(false);
  return (
    <div onClick={() => setActive((prev) => !prev)} className={`${style.notActive} ${active && style.active}`}>{name}</div>
  );
};
