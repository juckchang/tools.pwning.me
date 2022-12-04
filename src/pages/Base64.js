import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GTranslateIcon from '@mui/icons-material/GTranslate';
export default function Base64() {
  const [text, setText] = useState('')
  const [base64, setBase64] = useState('')
  const [hex, setHex] = useState('')
  const [isHex, setisHex] = useState(0)

  const changeText = e => {
    if (isHex === 0) {
      setText(e.target.value)
      setBase64(btoa(e.target.value))
    } else {
      let r = ''
      e.target.value.split(' ').forEach(x => 
        r += String.fromCharCode(parseInt(x,16))
      )
      setHex(e.target.value)
      setBase64(btoa(r))
    }
  }

  const copyText = async e => {
    if (isHex === 0) {
      await navigator.clipboard.writeText(text)
    } else {
      let r = '['
      hex.split(' ').slice(0,-1).forEach(x => 
        r += '0x' + x + ','
      )
      r = r.slice(0, -1)
      r += ']'
      await navigator.clipboard.writeText(r)
    }
   
  }

  const copyBase64 = async e => {
    await navigator.clipboard.writeText(base64)
  }

  const changeBase64 = e => {
    if (isHex === 0) {
      setBase64(e.target.value)
      setText(atob(e.target.value))
    } else {
      setBase64(e.target.value)
      let t = atob(e.target.value)
      let r = ''
      t.split('').forEach(x => {
        r += x.charCodeAt(0).toString(16).padStart(2,0) + ' '
      })
      setHex(r)
    }
  }

  const changeHex = e => {
    if (isHex === 0) { // text -> hex
      let r = ''
      text.split('').forEach(x => {
        r += x.charCodeAt(0).toString(16).padStart(2,0) + ' '
      })
      setHex(r)
    } else { // hex -> text
      let r = ''
      hex.split(' ').forEach(x => 
        r += String.fromCharCode(parseInt(x,16))
      )
      setText(r)
    }
    setisHex(!isHex)
  }

  const preventTab = e => {
    if (e.key === "Tab") {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd

      e.target.value =
      e.target.value.substring(0, start) + "\t" + e.target.value.substring(end);

      e.target.selectionStart = e.target.selectionEnd = start + 1;
    }
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
            value={isHex ? hex : text}
            onChange={changeText}
            onKeyDown={preventTab}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="copy text"
                  edge="end"
                  onClick={copyText}
                >
                  <ContentCopyIcon />
                  
                </IconButton>
                <IconButton
                  aria-label="str <-> hex"
                  edge="end"
                  onClick={changeHex}
                >
                  <GTranslateIcon />
                  
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
            onKeyDown={preventTab}
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