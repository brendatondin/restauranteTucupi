import * as React from "react";
import dayjs from "dayjs";



export default function ResponsiveDatePickers({handleChange}) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Data"
          inputFormat="DD/MM/YYYY"
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
