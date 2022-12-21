import { Button } from '@mui/material'
import React from 'react'

export const ButtonCustom = ({onclickButton}) => {



  return (
    <Button variant='contained' onClick={()=>onclickButton('d')}>Buscar</Button>
  )
}
