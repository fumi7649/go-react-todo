import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState('');

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  }

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" sx={{ m: 3 }}>
        <TextField
          label="todo"
          name='todo'
          value={todo}
          type="text"
          variant="outlined"
          size='small'
          onChange={handleChangeTodo}
        />
        <Button variant="contained" endIcon={<AddIcon />}>create</Button>
      </Grid>
      <TodoItem {...todos}/>
    </>
  );
}

export default TodoList;