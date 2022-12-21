import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { columns } from '../data/Data';

const DataLocal =   ({ send, setrenderLog, renderLog }) => {
const [data, setdata] = useState([])

  useEffect(() => {
    if(send!==undefined){
      axios.get(`http://localhost:8080/API/public/timezome?country=${send.selectCountry}&date=${send.selectedCalendarDay}`)
      .then( (dt) => {
          const {data} = !!dt && dt;
          setdata([data.data.timezone]);
          setrenderLog(!renderLog)
          console.log('data local useEffect buscando api')
        }
      ).catch( (err)=>{
        console.log(err);
      })
    }
  }, [send])

  return (
    <>
     <div style={{ height: 230, width: '100%', backgroundColor: "white", marginBottom: "5px", marginTop: "10px" }}>
          <h2>Horario local</h2>
          {
            data.length === 0 && send!==undefined ? (<h2>cargando</h2>) : (
              <DataGrid
                rows={data}
                columns={columns}
                experimentalFeatures={{ newEditingApi: false }}
              />
            )
          }

        </div>
    </>
  )
}

export default DataLocal;