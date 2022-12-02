import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Hex() {
  const [text, setText] = useState('')
  const [hex, setHex] = useState('')

  const changeText = e => {
    setText(e.target.value)
    let r = ''
    e.target.value.split('').forEach(x => {
      r += x.charCodeAt(0).toString(16)
    })
    setHex(r)
  }

  const copyText = async e => {
    await navigator.clipboard.writeText(text)
  }

  const copyHex = async e => {
    await navigator.clipboard.writeText(Hex)
  }

  const changeHex = e => {
    let r = ''
    setHex(e.target.value)
    e.target.value.match(/.{1,2}/g).forEach(x => 
      r += String.fromCharCode(parseInt(x,16))
    )

    setText(r)
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
          <InputLabel htmlFor="outlined-adornment-password">Hex</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={hex}
            onChange={changeHex}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={copyHex}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
            multiline
            rows={10}
            label="Hex"
          />
        </FormControl>
    </Box>
  );
}