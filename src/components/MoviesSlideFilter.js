import { Slider } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useDispatch, useSelector } from 'react-redux'
import { movieFilterActions } from '../redux/actions/movieFilterActions'

const MoviesSlideFilter = ({title}) => {
	const dispatch = useDispatch();
	const { 
		keyword,
		releaseDateGte,
		releaseDateLte,
		withGenres,
		sortBy,
		pageNum,
	 } = useSelector(state => state.movieFilter);

	const min = 1980;
	const max = 2023;
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

	useEffect(() => {
		dispatch({
			type: "STORE_DATE_SUCCESS",
			payload: {
				releaseDateGte: value[0],
				releaseDateLte: value[1]
			}
		})
	}, [value])


	return (
		<ThemeProvider theme={theme}>
			<div className='movies-sort-slider'>
			<h4>{title}</h4>
			<p>{value[0]} - {value[1]}</p>
			<Slider
				getAriaLabel={() => 'Years range'}
				value={value}
				onChange={handleChange}
				// valueLabelDisplay="auto"
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