import React, { useState, useEffect } from 'react';
import { FETCH_URL_JSON_SERVER } from '../../constants';

// Сделайте запрос в базу данных FETCH_URL_JSON_SERVER
// Отрендерите каждый пост в листе в формате
// "Автор: Вася, title: привет"

function BasicFetch() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(FETCH_URL_JSON_SERVER)
      .then((prev) => prev.json())
      .then((prev) => setPost(prev));
  }, [])
  console.log(post);
  return (
    <>
      {post.map(({ id, name, title}) => {
        return (
          <React.Fragment key={id}>
            <ul>
              <li>Автор: {name}, title: {title}</li>
            </ul>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default BasicFetch;
