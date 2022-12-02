import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Url() {
  const [text, setText] = useState('')
  const [url, setUrl] = useState('')

  const changeText = e => {
    setText(e.target.value)
    setUrl(encodeURIComponent(e.target.value))
  }

  const copyText = async e => {
    await navigator.clipboard.writeText(text)
  }

  const copyUrl = async e => {
    await navigator.clipboard.writeText(url)
  }

  const changeUrl = e => {
    setUrl(e.target.value)
    setText(decodeURIComponent(e.target.value))
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
            value={text}
            onChange={changeText}
            onKeyDown={preventTab}
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
          <InputLabel htmlFor="outlined-adornment-password">Url</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={url}
            onChange={changeUrl}
            onKeyDown={preventTab}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={copyUrl}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
            multiline
            rows={10}
            label="Url"
          />
        </FormControl>
    </Box>
  );
}