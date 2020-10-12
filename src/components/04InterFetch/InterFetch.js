import React, { useEffect, useState } from 'react';
import {
  FETCH_URL_JSON_SERVER,
} from '../../constants';

// Создай форму c input и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру name(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}?name=Вася) и отрендерить полученный результат
// в диве формате name: ... Title ...

export default function InterFetch() {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    fetch(`${FETCH_URL_JSON_SERVER}?name=${input}`)
      .then((prev) => prev.json())
      .then((prev) => setShow(prev[0]));
  }

  console.log('show', show);
  return (
    <>
      <form onSubmit={handleForm}>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
        <button type="submit">нажать</button>
      </form>
      <div>{show && `name: ${show.name} Title: ${show.title}`}</div>

    </>
  );
}
