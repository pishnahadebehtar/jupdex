import { Box, TextField, Button } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function Create() {
  const mode = useSelector((state) => state.ModeSlice.mode);
  const theme = useTheme();
  return (
    <Box
      width="100%"
      margin={"5vh 0"}
      height="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        padding="1vw"
        width="45vw"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        zIndex={1}
        boxShadow={`0 0 0.5rem ${theme.palette.primary.main}`}
      >
        <Typography
          variant="h4"
          sx={{
            color: mode === "dark" ? "white" : "black",
          }}
          textAlign={"center"}
        >
          Create A Todo
        </Typography>
        <TextField
          sx={{
            width: "40vw",
            color: mode === "dark" ? "white" : "black",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
              "&:hover fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
              "&.Mui-focused:hover fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
            },
            label: {
              color: mode === "dark" ? "white" : "black",
            },
            input: {
              color: mode === "dark" ? "white" : "black",
            },
          }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          sx={{
            width: "40vw",
            color: mode === "dark" ? "white" : "black",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
              "&:hover fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
              "&.Mui-focused:hover fieldset": {
                borderColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "white" : "black",
              },
            },
            label: {
              color: mode === "dark" ? "white" : "black",
            },
            input: {
              color: mode === "dark" ? "white" : "black",
            },
          }}
          id="outlined-basic"
          label="Explain"
          variant="outlined"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                width: "40vw",

                label: {
                  color: mode === "dark" ? "white" : "black",
                },
                "& .MuiInputBase-root": {
                  color: mode === "dark" ? "white" : "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode === "dark" ? "white" : "black",
                    color: mode === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                    color: mode === "dark" ? "white" : "black",
                  },
                },
                svg: {
                  color: theme.palette.primary.main,
                },
              }}
              label="From Date"
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                width: "40vw",

                label: {
                  color: mode === "dark" ? "white" : "black",
                },
                "& .MuiInputBase-root": {
                  color: mode === "dark" ? "white" : "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode === "dark" ? "white" : "black",
                    color: mode === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                    color: mode === "dark" ? "white" : "black",
                  },
                },
                svg: {
                  color: theme.palette.primary.main,
                },
              }}
              label="To Date"
            />
          </DemoContainer>
        </LocalizationProvider>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              color: mode === "dark" ? "white" : "black",
              fontWeight: "bold",
              "&.Mui-focused": { color: mode === "dark" ? "white" : "black" },
              "&.Mui-focused:hover": {
                color: mode === "dark" ? "white" : "black",
              },
              "&.Mui-error": {
                color: mode === "dark" ? "white" : "black",
              },
            }}
          >
            Category
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="work"
            name="radio-buttons-group"
            label="Category"
            sx={{
              width: "40vw",
            }}
          >
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="work"
              sx={{
                color: mode === "dark" ? "white" : "black",
                ".PrivateSwitchBase-root": {
                  color: mode === "dark" ? "white" : "black",
                  "&.Mui-checked": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            />
            <FormControlLabel
              value="money"
              control={<Radio />}
              label="money"
              sx={{
                color: mode === "dark" ? "white" : "black",
                ".PrivateSwitchBase-root": {
                  color: mode === "dark" ? "white" : "black",
                  "&.Mui-checked": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="other"
              sx={{
                color: mode === "dark" ? "white" : "black",
                ".PrivateSwitchBase-root": {
                  color: mode === "dark" ? "white" : "black",
                  "&.Mui-checked": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained">Create</Button>
      </Box>
    </Box>
  );
}

export default Create;
