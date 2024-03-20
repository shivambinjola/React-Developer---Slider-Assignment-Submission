import * as React from "react";
import Box from "@mui/material/Box";
import Sliders from "@mui/material/Slider";

const Slider = () => {
  const [value, setValue] = React.useState<number>(30);
  const [valuesec, setValuesec] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const handleChangesec = (event: Event, newValue: number | number[]) => {
    setValuesec(newValue as number[]);
  };

  function valuetextsec(value: number) {
    return `${value}°C`;
  }
  return (
    <div
      className=""
      style={{
        // margin: "150px",
        width: "480px",

        border: "2px black",
      }}
    >
      {/* <button className="bg-black">hello</button> */}
      <Box sx={{ width: 480 }}>
        <Sliders
          className=""
          defaultValue={10}
          aria-label="Disabled slider"
          sx={{
            "& .MuiSlider-rail": {
              bgcolor: "#F2F3F5", // Change the color of the thumb here
            },
            "& .MuiSlider-track": {
              bgcolor: "#47B647", // Change the color of the track here
            },
            "& .MuiSlider-valueLabel": {
              bgcolor: "white", // Change the color of the thumb here
            },
            "& .MuiSlider-thumb": {
              width: 30, // Set the width of the thumb
              height: 30, // Set the height of the thumb
              borderColor: "white", // Default color of the outer layer
              borderWidth: 8, // Border width
              borderStyle: "solid", // Border style
              boxShadow: "0 0 2px black",

              "&:hover": {
                borderColor: "#E9F7E9",
                borderWidth: 8, // Border width
                borderStyle: "solid",
                boxShadow: "0 0 1px black",
              },
              "&:focus": {
                borderColor: "white",
                borderWidth: 8, // Border width
                borderStyle: "solid",
                boxShadow: "0 0 5px green",
              },
            },
            color: "#47B647",
            // msScrollbarTrackColor: "black",
          }}
        />
        <br />
        <br />
        <Sliders
          getAriaLabel={() => "Temperature range"}
          value={valuesec}
          onChange={handleChangesec}
          valueLabelDisplay="auto"
          getAriaValueText={valuetextsec}
          sx={{
            "& .MuiSlider-rail": {
              bgcolor: "#F2F3F5", // Change the color of the thumb here
            },
            "& .MuiSlider-track": {
              bgcolor: "#47B647", // Change the color of the track here
            },
            "& .MuiSlider-thumb": {
              width: 30, // Set the width of the thumb
              height: 30, // Set the height of the thumb
              borderColor: "white", // Default color of the outer layer
              borderWidth: 8, // Border width
              borderStyle: "solid", // Border style
              boxShadow: "0 0 2px black",

              "&:hover": {
                borderColor: "#E9F7E9",
                borderWidth: 8, // Border width
                borderStyle: "solid",
                boxShadow: "0 0 1px black",
              },
              "&:focus": {
                borderColor: "white",
                borderWidth: 8, // Border width
                borderStyle: "solid",
                boxShadow: "0 0 5px green",
              },
            },
            color: "#47B647",
            // msScrollbarTrackColor: "black",
          }}
        />
        <br />
        <br />
        <Sliders
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
          sx={{
            "& .MuiSlider-rail": {
              bgcolor: "#F2F3F5", // Change the color of the thumb here
            },
            "& .MuiSlider-track": {
              bgcolor: "#47B647", // Change the color of the track here
            },
            "& .MuiSlider-thumb": {
              width: 30, // Set the width of the thumb
              height: 30, // Set the height of the thumb
              borderColor: "white", // Default color of the outer layer
              borderWidth: 8, // Border width
              borderStyle: "solid", // Border style
              boxShadow: "0 0 2px black",

              "&:hover": {
                borderColor: "#E9F7E9",
                borderWidth: 8, // Border width
                borderStyle: "solid",
                boxShadow: "0 0 1px black",
              },
              "&:focus": {
                borderColor: "white",
                borderWidth: 8, // Border width
                borderStyle: "solid",
                boxShadow: "0 0 5px green",
              },
            },
            color: "#47B647",
            // msScrollbarTrackColor: "black",
          }}
        />{" "}
      </Box>
    </div>
  );
};

export default Slider;
