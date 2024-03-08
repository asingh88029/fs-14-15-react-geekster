import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  const [tenure, setTenure] = React.useState('');

  const handleChange = (event) => {
    setTenure(event.target.value);
    props.setTenureParent(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: '100%'}}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={tenure}
          onChange={handleChange}
          autoWidth
          label="Select Tenure"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>Two Year</MenuItem>
          <MenuItem value={5}>Five Year</MenuItem>
          <MenuItem value={10}>Ten Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}