import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"><Link to="/base64">Base64</Link></Button>
          <Button color="inherit"><Link to="/hex">Hex</Link></Button>
          <Button color="inherit"><Link to="/url">Url</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}