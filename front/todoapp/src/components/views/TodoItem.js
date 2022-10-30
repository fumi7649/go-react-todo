import { Button, Grid, List, ListItem, ListItemText } from "@mui/material"
import { Box } from "@mui/system";
import WorkIcon from '@mui/icons-material/Work';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = (props) => {
  const tasks = props.tasks;
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}>
          {tasks?.map((task, index) => {
            return (
              <ListItem key={index}>
                <WorkIcon sx={{ p: 2 }} />
                <ListItemText primary={task.title} />
                <Button onClick={() => props.onClick(task.id)} endIcon={<DeleteIcon />}>Delete</Button>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Grid>
  );
}

export default TodoItem;