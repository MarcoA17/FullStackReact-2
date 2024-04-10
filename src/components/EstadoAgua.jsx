import { useState } from "react";
import {Button, TextField} from '@mui/material';


function EstadoAgua() {

    const[temperatura, setTemperatura] = useState(10);

    function aumentarTemperatura(){
        setTemperatura(temperatura + 5);
    }

    function bajarTemperatura(){
        setTemperatura(temperatura - 5);
    }

    return(
        <>
        <h2>Estado del agua </h2>
        <Button onClick={bajarTemperatura} variant="contained">Bajar temperatura</Button>
        <TextField value = {temperatura}></TextField>
        <Button onClick={aumentarTemperatura} color="error">Aumentar temperatura</Button>
        </>
    )
}

export default EstadoAgua;