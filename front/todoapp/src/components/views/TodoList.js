import { Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  }

  const getTodosData = async() => {
    await axios.get("http://localhost:8080/todo/api/v1/todos")
      .then((res) => {
        setTodos(res.data);
      }).catch((err) => {
        console.error(err);
      })
  }
  
  useEffect(() => {
    getTodosData();
  }, []);

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