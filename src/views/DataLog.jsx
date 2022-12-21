import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react'
import { columnsBD } from '../data/Data';

const DataLog = memo(({renderLog}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(' me cree datalog useefect call api ');
    axios.get(`http://localhost:8080/API/public/log`)
      .then((datas) => {
        setData(datas.data);
      }
      )
  }, [renderLog])
  
  return (
    <>
    {
      (
    <div style={{ height: 430, width: '100%', backgroundColor: "white", marginBottom: "5px", marginTop: "10px" }}>
          <h2>Datos Guardados</h2>
          <DataGrid
            rows={data}
            columns={columnsBD}
            experimentalFeatures={{ newEditingApi: false }}
          />
        </div>)
    }</>
  )
}
)
export default DataLog;
