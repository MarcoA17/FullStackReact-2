import agua from '../images/agua.png'
import EstadoAgua from './EstadoAgua'
import Button from '@mui/material/Button';

export const Agua = () =>{
    return (
        <>
        <h1>Elemento Agua</h1>
        <h2>SABER</h2>

        <img src= {agua} />

      <Button variant="text">Mi primer boton</Button>
      <Button variant="contained">Mi segundo boton</Button>
      <Button variant="outlined">Mi tercer boton</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success"> Success </Button>
      <Button variant="outlined" color="error">Error </Button>

      <EstadoAgua></EstadoAgua>

        </>
    )
}