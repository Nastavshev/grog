import React, { useState } from 'react';
import Name from './components/Name';

// Сделай так, чтобы кнопки рядом с именами удаляли эти имена.
// Важно, что бы порядок удаления был соблюден,
// то есть кнопка рядом с Васей не удаляет Илью
export default function DeleteState() {

  const [state, setState] = useState(['Vasya', 'Petya', 'Ilya', 'Vasya', 'Vasya']);
  return (
    <>
      <ul>
        {state.map((el, index) => <Name name={el} index={index} setState={setState} />)}
      </ul>
    </>
  );
}
