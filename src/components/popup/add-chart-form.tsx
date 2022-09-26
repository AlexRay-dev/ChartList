import React, {FC, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {FormButton, FormItem, FormTitle } from './styles';

const AddChartForm: FC = () => {
  const [type, setType] = useState('')

  return (
    <>
      <FormTitle variant="h5">Adding new chart</FormTitle>

      <Box component="form">
        <FormItem>
          <TextField label="Title" variant="outlined" fullWidth/>
        </FormItem>

        <FormItem>
          <FormControl fullWidth>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </FormItem>

        <FormItem>
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
        </FormItem>

        <FormItem>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label3">Data</InputLabel>
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
        </FormItem>

        <Stack>
          <FormButton variant="contained">Save</FormButton>
        </Stack>
      </Box>
    </>
  );
};

export default AddChartForm;

