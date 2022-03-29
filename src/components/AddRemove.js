import React, { useState } from 'react'
import {IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme, ThemeProvider } from "@mui/material/styles";



function AddRemove(props) {

    const [number, setNumber] = useState(0);

    const addNumber = () =>{
        setNumber(number + 1);
    }
    const subtractNumber = () =>{
        setNumber(number - 1);
    }

    const theme = createTheme({
        status: {
          danger: "#e53e3e",
        },
        palette: {
          primary: {
            main: "#0971f1",
            darker: "#053e85",
          },
          neutral: {
            main: "#64748B",
            contrastText: "#fff",
          },
          c4: {
            main: "#7d53a1",
            darker: "#053e85",
          },
        },
      });
    return (
        <ThemeProvider theme={theme}>
        <IconButton size="small" color="c4" onClick={subtractNumber}><RemoveIcon/></IconButton>
        {props.name}: ({number})
        <IconButton size="small" color="c4" onClick={addNumber} >
        <AddIcon/>
        </IconButton>
      </ThemeProvider>
    )
  }

  export default AddRemove;
