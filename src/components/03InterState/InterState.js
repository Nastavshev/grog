import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

const InterState = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState([]);

  console.log(state);
  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} name="name" type="text" />
      <button onClick={() => setState((prev) => [...prev, input])} type="button">нажать</button>
      {state.map((el, i) => <div key={i}>{`${i}${el}${i}`}</div>)}
    </>
  );
};

export default InterState;
