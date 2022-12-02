import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import sha512 from 'crypto-js/sha512'
import sha256 from 'crypto-js/sha256'
import sha1 from 'crypto-js/sha1'
import md5 from 'crypto-js/md5'

export default function Hash() {
  const [text, setText] = useState('')
  const [hash, setHash] = useState('')
  const [hashType, setHashType] = useState('')

  const changeText = e => {
    setText(e.target.value)
    setHash(hashing(hashType, e.target.value))
  }

  const copyText = async e => {
    await navigator.clipboard.writeText(text)
  }

  const copyHash = async e => {
    await navigator.clipboard.writeText(hash)
  }

  const hashing = (type, text) => {
    if (type === 'md5') {
      return md5(text)
    } else if (type === 'sha1') {
      return sha1(text)
    } else if (type === 'sha256') {
      return sha256(text)
    } else if (type === 'sha512') {
      return sha512(text)
    }else {
      return text
    }
  }

  const changeHash = e => {
    setHashType(e.target.value)
    setHash(hashing(e.target.value, text))
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
      
      <FormControl style={{'justify-content': 'center', 'align-items': 'center'}}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          
        >
          <FormControlLabel value="md5" control={<Radio />} onChange={changeHash} label="md5" />
          <FormControlLabel value="sha1" control={<Radio />} onChange={changeHash} label="sha1" />
          <FormControlLabel value="sha256" control={<Radio />} onChange={changeHash} label="sha256" />
          <FormControlLabel value="sha512" control={<Radio />} onChange={changeHash} label="sha512" />

        </RadioGroup>
      </FormControl>

      <br />
      <FormControl sx={{ m: 1, width: '120ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Hash</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={hash}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={copyHash}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
            multiline
            rows={10}
            label="Hash"
          />
        </FormControl>
    </Box>
  );
}