import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Button } from './Components/Button';
import { InputLabel } from './Components/InputLabel';
import { FilterTodo } from './Components/Filter';
import { titleAtom, descriptionAtom, todosAtom } from './store/atoms/Todo';

function App() {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const addTodo = () => {
      setTodos([...todos, { title, description }]);
      setTitle('');
      setDescription('');
  };

  return (
    <>
      <FilterTodo />
      <InputLabel
        name="Title"
        placeholder="Enter your Todo Title"
      />
      <br />
      <InputLabel
        name="Description"
        placeholder="Enter your Todo Description"
      />
      <br />
      <Button onClick={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
