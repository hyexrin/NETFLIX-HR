import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const MoviesGenreFilter = ({ genres }) => {
	const dispatch = useDispatch();
	// const {genresData}

	const [isSelect, setIsSelect] = useState([]);

	const getGenresList = (item) => {
		!isSelect.includes(item.id)
			? setIsSelect((isSelect) => [...isSelect, item.id])
			: setIsSelect(isSelect.filter((btn) => btn !== item.id));
	}  

	useEffect(() => {
		dispatch({
			type: "STORE_GENRES_SUCCESS",
			payload: isSelect
		})
	}, [isSelect])

	return (
		<div className='movies-sort-gneres'>
			<h4>GENRES</h4>

			<Container>
				<Row className='genres-select-box'>
					{genres &&
						genres.data.genres.map((item) => (
							<Col lg={4} key={item.id} className={isSelect.includes(item.id) ? 'genre-item-select-box': 'genre-item-box'}>
								<p className='genre-item' onClick={() => getGenresList(item)}>{item.name}</p>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	)
}

export default MoviesGenreFilter