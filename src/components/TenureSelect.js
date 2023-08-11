import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({ data, setData }) => {
  const items = Array(36).fill(null)

  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value,
    });
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Mortgage Length</InputLabel>
      
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Mortgage term"
        onChange={handleChange}
      >
      {items.map((item, year) => (
        <MenuItem key={year} value={year + 5}>
          {year + 5}
        </MenuItem>
      ))}

      </Select>
    </FormControl>
)};

export default TenureSelect;
