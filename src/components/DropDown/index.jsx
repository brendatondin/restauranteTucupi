import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Quantidade = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
];

export default function SelectTextFields({setValores, valores}) {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {

    setCurrency(event.target.value);

    setValores({
      ...valores,
      lugares: event.target.value,
    });
  }
 ;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Lugares"
          value={currency}
          onChange={handleChange}
          helperText="Selecione a quantidade de lugares"
          variant="standard"
        >
          {Quantidade.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
