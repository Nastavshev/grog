import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет отображаться текст из инпута
const BasicState = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <div>{input}</div>
    </>
  )
};

export default BasicState;
