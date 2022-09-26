import React, {FC, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {FormButton, FormItem, FormTitle } from './styles';

const EditChartForm: FC = () => {
  const [type, setType] = useState('')

  return (
    <>
      <FormTitle variant="h5">Chart editing</FormTitle>

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
            <InputLabel id="color-select-label">Color</InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              value={type}
              label="Color"
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

export default EditChartForm;


