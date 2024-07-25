import React from 'react';
import { useRecoilState } from 'recoil';
import { descriptionAtom, titleAtom } from '../store/atoms/Todo';

export const InputLabel = ({ name, placeholder }) => {
  const [val, setVal] = useRecoilState(titleAtom);
  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <label>{name}</label>
      <br />
      <input
        placeholder={placeholder}
        type="text"
        value={val}
        onChange={changeHandler}
      />
    </div>
  );
};
