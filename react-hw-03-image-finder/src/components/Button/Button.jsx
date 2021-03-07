import React from 'react';

const Button = ({ clickHandler }) => {
  return (
    <>
      <button onClick={clickHandler} type="button">
        Load more
      </button>
    </>
  );
};

export default Button;
