import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/signin');
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <Button color="inherit" onClick={handleLogout}>ログアウト</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header;