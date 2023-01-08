import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { movieFilterActions } from '../redux/actions/movieFilterActions';

const MoviesFilter = () => {
	const dispatch = useDispatch();
	
	const isMounted = useRef(false);
	const { 
		keyword,
		releaseDateGte,
		releaseDateLte,
		withGenres,
		sortBy,
		pageNum,
	 } = useSelector(state => state.movieFilter);

	

	return (
		<div className='movies-sort-filter'>
			<div className='movies-sort-searchbox'>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Movies Title"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						onKeyPress={(event) => {
							event.key === "Enter" &&
								dispatch({
									type: "STORE_SEARCH_KEYWORD_SUCCESS",
									payload: event.target.value,
								})
						}}
					/>
				</InputGroup>
			</div>

			<div className='movies-sort-dropdown'>
				<Dropdown.Menu show
					variant='dark'>
					<DropdownButton id="dropdown-basic-button" title="SORT"
						onSelect={(eventKey) => {
							console.log(eventKey);
							dispatch({type: "STORE_SORTBY_SUCCESS", payload: eventKey});
							// dispatch({type: "GET_FILTERED_REQUEST"})
						}}>
						<Dropdown.Item eventKey="popularity.asc">By Popularity{'(asc)'}</Dropdown.Item>
						<Dropdown.Item eventKey="popularity.desc">By Popularity{'(desc)'}</Dropdown.Item>
					</DropdownButton>
					<p className='sort-p'>{sortBy}</p>
				</Dropdown.Menu>
			</div>



		</div>
	)
}

export default MoviesFilter