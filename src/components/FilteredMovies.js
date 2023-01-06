import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FilteredMovies = () => {
	return (
		<Container>
			<Row>
				<Col 
					className='filtered-movies-card'
					lg={2} md={3} sm={4}
					style={{
						backgroundImage: 'url(https://www.themoviedb.org/t/p/w440_and_h660_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg)',
					}}>
				</Col>
				<Col 
					className='filtered-movies-card'
					lg={2} md={3} sm={4}
					style={{
						backgroundImage: 'url(https://www.themoviedb.org/t/p/w440_and_h660_face/7KT8E7CpEwxQUay5nROpY6mCK8F.jpg)',
					}}>
				</Col>
			</Row>
		</Container>
	)
}

export default FilteredMovies