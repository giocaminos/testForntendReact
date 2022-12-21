import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Tooltip } from '@mui/material';

export const columns = [
  {
    field: 'id',
    headerName: 'id',
    type: 'string',
    width: 200,
    editable: true,
  }, {
    field: 'location',
    headerName: 'location',
    type: 'string',
    width: 100,
    editable: true,
  }, {
    field: 'country_code',
    headerName: 'country_cod',
    type: 'string',
    width: 100,
    editable: true,
  },
  {
    field: 'country_name',
    headerName: 'country name',
    type: 'string',
    width: 100,
    editable: true,
  },{
    field: 'capital',
    headerName: 'capital',
    type: 'string',
    width: 100,
    editable: true,
  },

];

export const columnsBD = [
  {
    field: 'id',
    headerName: 'id',
    type: 'string',
    width: 200,
    editable: true,
  }, {
    field: 'valor',
    headerName: 'JSON Guardado',
    type: 'string',
    flex: 1,
    editable: true,
  },

];


const MatEdit = ({ index }) => {
  return (

    showAlert(index)

  );
};


const showAlert = (index) => {
  if (index <= 30)
    return (<div>
      <Tooltip title={index} placement="left">
        <CancelIcon color="error" />
      </Tooltip>
    </div>
    )
  else if (index <= 40)
    return (<div style={{ width: '100%', textAlign: 'end' }}>
      <Tooltip title={index} placement="left">
        <WarningIcon color="warning" className='button' />
      </Tooltip>
    </div>
    )
  else
    return (<div>
      <Tooltip title={index} placement="left">
        <CheckCircleIcon color="success" />
      </Tooltip>
    </div>
    )
}

const al = 80;

export const rows = [
  {
    id: 1, reactive: 'Reactivo 1', cantidad: 0, medida: 'Litros', gInsumo: 8, bGenerales: 1, bEspeciales: 2, citologia: 0, autopcia: 0, bgTotal: 4, beTotal: 1, cTotal: 6, aTotal: 2, alert: al
  }, {
    id: 2, reactive: 'Reactivo 2', cantidad: 0, medida: 'Litros', gInsumo: 8, bGenerales: 1, bEspeciales: 2, citologia: 0, autopcia: 0, bgTotal: 4, beTotal: 1, cTotal: 6, aTotal: 2, alert: 20
  }, {
    id: 3, reactive: 'Reactivo 3', cantidad: 0, medida: 'Litros', gInsumo: 8, bGenerales: 1, bEspeciales: 2, citologia: 0, autopcia: 0, bgTotal: 4, beTotal: 1, cTotal: 6, aTotal: 2, alert: 40
  }, {
    id: 4, reactive: 'Reactivo 4', cantidad: 0, medida: 'Litros', gInsumo: 8, bGenerales: 1, bEspeciales: 2, citologia: 0, autopcia: 0, bgTotal: 4, beTotal: 1, cTotal: 6, aTotal: 2, alert: 10
  }, {
    id: 5, reactive: 'Reactivo 5', cantidad: 0, medida: 'Litros', gInsumo: 8, bGenerales: 1, bEspeciales: 2, citologia: 0, autopcia: 0, bgTotal: 4, beTotal: 1, cTotal: 6, aTotal: 2, alert: 30
  }
];

export const rowsRactivos = [
  {
    id: 1, name: 'Reactivo 1',
  }, {
    id: 2, name: 'Reactivo 2',
  }, {
    id: 3, name: 'Reactivo 3',
  }, {
    id: 4, name: 'Reactivo 4',
  }, {
    id: 5, name: 'Reactivo 5',
  }
];

export const columnsReactivos = [

  {
    field: 'name',
    headerName: 'nombre',
    type: 'string',
    flex:1,
    editable: true,
  },];