import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { memo, useEffect, useState } from 'react';

import axios from 'axios';

const SelectMenu = memo(({ labelText, handleChange }) => {
 
  const [country, setcountry] = useState('America/El_Salvador');

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('selectmenu buscando api ');
    axios.get('https://api.timezonedb.com/v2.1/list-time-zone?key=WBEZOY21FWU1&format=json')
      .then((dt) => {
        setData(dt.data.zones);
      }
      )
  }, [])

  const selected = ({ target }) => {
    setcountry(target.value);
    handleChange(target.value);
  };

  return (
    <>
      {
        data.length === 0 ? (
          <h1>cargando</h1>) : (
          <Box sx={{ minWidth: 30, marginTop: '15px' }}>
            <FormControl fullWidth>
              <InputLabel>{labelText}</InputLabel>
              <Select defaultValue='America/El_Salvador'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                onChange={selected}
                style={{ backgroundColor: 'white', margin: '3px' }}
              >
                {data.map(({ countryName, zoneName }) => (<MenuItem key={zoneName} value={zoneName} name={zoneName}>{countryName}</MenuItem>))}
              </Select>
            </FormControl>
          </Box>
        )
      }
    </>
  );
})

export default SelectMenu;
