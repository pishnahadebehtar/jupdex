import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../state/ContentSlice";
export default function RadioButtonsGroup() {
  const temp = useSelector((store) => store.ContentSlice.temp);

  const dispatch = useDispatch();
  return (
    <FormControl sx={{ margin: 5 }}>
      <FormLabel id="demo-radio-buttons-group-label" color="secondary">
        Category
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{ margin: 2 }}
        onChange={(e) => {
          dispatch(update({ ...temp, category: e.target.value }));
        }}
      >
        <FormControlLabel
          value="Todos"
          control={<Radio color="secondary" />}
          label="Todos"
        />
        <FormControlLabel value="Money" control={<Radio />} label="Money" />
        <FormControlLabel
          value="Reminders"
          control={<Radio />}
          label="Reminders"
        />
        <FormControlLabel value="Work" control={<Radio />} label="Work" />
      </RadioGroup>
    </FormControl>
  );
}
