import React from 'react'
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap'

const MoviesFilter = () => {
	return (
		<div className='movies-sort-filter'>
			<div className='movies-sort-searchbox'>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Movies Title"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>
			</div>
			
			<div className='movies-sort-dropdown'>
				<Dropdown.Menu show
					variant='dark'>
					<Dropdown.Header>SORT</Dropdown.Header>
					<Dropdown.Item eventKey="2">By Popularity{'(desc)'}</Dropdown.Item>
					<Dropdown.Item eventKey="3">By Popularity{'(asc)'}</Dropdown.Item>
				</Dropdown.Menu>
			</div>


			
		</div>
	)
}

export default MoviesFilter