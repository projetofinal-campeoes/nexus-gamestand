import { useContext } from "react";
import Switch from "@mui/material/Switch";
import { NexusContext } from "../context/NexusContext";

export default function ControlledSwitches() {
  const { checked, setChecked, handleChange } = useContext(NexusContext);

  return (
    <Switch
      checked={checked}
      onChange={() => handleChange}
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
