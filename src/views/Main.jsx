import { Button } from '@mui/material';
import React, { useState } from 'react'
import Calendar from '../component/Calendar';
import SelectMenu from '../component/SelectMenu'
import { useDate } from '../hook/useDate';
import DataLocal from './DataLocal';
import DataLog from './DataLog';

export const Main = () => {

  const [selectCountry, setselectCountry] = useState('America/El_Salvador');
  const {formatDate,dateToLocalDate} = useDate(new Date());
  const [enviar, setenviar] = useState();
  const [renderLog, setrenderLog] = useState(false);
  
  
  const onSelected = (event) => {
    setselectCountry(event);
  }

  const handleChangePrincipal = (event) => {
    dateToLocalDate(event.$d);

  }

  const  onclickButton = () => {
    console.log(formatDate);
    setenviar({selectCountry:selectCountry,selectedCalendarDay: formatDate});
  }

  return (
    <>
      <div style={{ margin: '10%' }}>
        <Calendar handleChangePrincipal={handleChangePrincipal} />
        <SelectMenu handleChange={onSelected} labelText={'Country'} />
        <Button variant='contained' onClick={  onclickButton} style={{marginTop: '10px'}}>Buscar</Button>
  
        <DataLocal send={enviar} setrenderLog={setrenderLog} renderLog={renderLog} />
        <br/>
        <br/>
        <DataLog renderLog={renderLog}/>
     
        <br />
        <br />

      </div>
    </>
  )
}

