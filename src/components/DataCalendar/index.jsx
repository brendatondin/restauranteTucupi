import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(value)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
