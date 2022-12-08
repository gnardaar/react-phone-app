import { Button, TextField } from "@material-ui/core";
import React, { forwardRef } from "react";

interface inputType {
  name: string;
  placeholder: string;
}

export const Input = forwardRef((props: inputType, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      type="text"
      {...props}
    ></TextField>
  );
});
