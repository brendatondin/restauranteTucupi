import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function BasicTimePicker({setValores, valores}) {
  const [value, setValue] = React.useState(null);

  function handleOnChange(nValue){
    setValue(nValue)
    setValores({
      ...valores,
      hora: `${nValue.$H}:${nValue.$m}`,
    });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Selecione seu horário"
        value={value}
        onChange={handleOnChange}
        renderInput={(params) => <TextField {...params} />} 
      />
    </LocalizationProvider>
  );
}
