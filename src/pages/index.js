// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Login() {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userId) {
      router.push(`/home?user_id=${userId}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '40px'}} >Login</h1>
      <form>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Enter user id" variant="standard" value={userId} onChange={(e) => setUserId(e.target.value)}/>
        </Box>
      </form>
      <Button onClick={handleSubmit} style={{ marginTop: '20px'}} variant="contained">Login</Button>
      <p style={{ marginTop: '20px'}}>Example: {'1 -> 1000'}</p>
    </div>
  );
}
