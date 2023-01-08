import { Pagination } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const FilteredMovies = () => {

	const dispatch = useDispatch();
	const {filteredMoviesDatas, loading} = useSelector(state => state.movieFilter);
	const [pageNum, setPageNum] = useState(1);
	const [movieData, setMovieData] = useState([]);

	const isMounted = useRef(false);
	console.log("pageNum", pageNum)

	return (
		<Container>

			<Row>
				{filteredMoviesDatas &&
				filteredMoviesDatas.data.results.map((item) => (
					item.poster_path &&
					<Col 
					key={item.id}
					className='filtered-movies-card'
					lg={2} md={3} sm={4}
					style={{
						backgroundImage: 'url(' +
						`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}` + ')',
					}}>
				</Col>
				))}
			</Row>
		</Container>
	)
}

export default FilteredMovies