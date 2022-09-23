import React, {FC, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {StyledButton} from "../shared/ui/styled-components/styled-button";


const PopupEditChart: FC = () => {
  const [type, setType] = useState('')

  return (
    <>
      <Typography mb={2} variant="h6">Chart editing</Typography>
      <Box component="form">

        <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth/>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label2">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select"
            value={type}
            label="Age"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label3">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label3"
            id="demo-simple-select"
            value={type}
            label="Age"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <StyledButton variant="contained" sx={{mt: 2}}>Save</StyledButton>
      </Box>
    </>
  );
};

export default PopupEditChart;