import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Base64() {
  const [text, setText] = useState('')
  const [base64, setBase64] = useState('')

  const changeText = e => {
    setText(e.target.value)
    setBase64(btoa(e.target.value))
  }

  const copyText = async e => {
    await navigator.clipboard.writeText(text)
  }

  const copyBase64 = async e => {
    await navigator.clipboard.writeText(base64)
  }

  const changeBase64 = e => {
    setBase64(e.target.value)
    setText(atob(e.target.value))
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '120ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <br />
      <br />

      <FormControl sx={{ m: 1, width: '120ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Text</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={text}
            onChange={changeText}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={copyText}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
            multiline
            rows={10}
            label="Text"
          />
        </FormControl>

      
      <br />
      <br />
      <br />
      <FormControl sx={{ m: 1, width: '120ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Base64</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={base64}
            onChange={changeBase64}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={copyBase64}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
            multiline
            rows={10}
            label="Base64"
          />
        </FormControl>
    </Box>
  );
}