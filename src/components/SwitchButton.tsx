import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

//tipar: 
// type ISwitch = {
//     checked: boolean;
//     handleChange: boolean;
//   };
// passar por Props no comps: { checked, handleChange }: ISwitch