import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MoviesGenreFilter = ({ genres }) => {
	
	return (
		<div className='movies-sort-gneres'>
			<h4>GENRES</h4>

			<Container>
				<Row className='genres-select-box'>
					{genres &&
						genres.data.genres.map((item) => (
							<Col lg={4} key={item.id} className='genre-item-box'>
								<p className='genre-item'>{item.name}</p>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	)
}

export default MoviesGenreFilter