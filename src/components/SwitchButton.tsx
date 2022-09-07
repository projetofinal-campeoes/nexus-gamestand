import { useContext } from "react";
import Switch from "@mui/material/Switch";
import { NexusContext } from "../context/NexusContext";

export default function ControlledSwitches() {
  const { checked } = useContext(NexusContext);

  return (
    <Switch checked={checked} inputProps={{ "aria-label": "controlled" }} />
  );
}
