import React from 'react';

function Name(props) {
  const { name, index, setState } = props;

  return (
    <>
      <li>{name}</li>
      <button onClick={() => setState((prev) => prev.filter((el, i) => i !== index))} type="button">
        Удалить
      </button>
    </>
  );
}

export default Name;
