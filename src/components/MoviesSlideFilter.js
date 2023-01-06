import { Slider } from '@mui/material'
import React, { useState } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles"

const MoviesSlideFilter = () => {
	const min = 0;
	const max = 10;
	const [value, setValue] = useState([min, max])
	let minDistance = 1;
	
	const handleChange = (event, newValue, activeThumb) => {
		if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
	}

	const valuetext = () => {
		return `${value}`
	}

	const theme = createTheme({
    palette: {
      primary: {
        light: "#f05545",
        main: "#b71c1c",
        dark: "#7f0000",
        contrastText: "#ffffff",
      },
    },
  });

	return (
		<ThemeProvider theme={theme}>
			<div className='movies-sort-slider'>
			<h4>YEAR</h4>
			<p>{value[0]} - {value[1]}</p>
			<Slider
				getAriaLabel={() => 'Temperature range'}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
				color="primary"
				min={min}
				max={max}
			/>
			</div>
		</ThemeProvider>
	)
}

export default MoviesSlideFilter