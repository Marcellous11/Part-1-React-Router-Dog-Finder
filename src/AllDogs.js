import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const AllDogs = ({ dogs }) => {
	return (
		<div>
			{dogs.map((dog) => {
				return (
					<NavLink key={uuid()} to={`/dogs/${dog.name}`}>
						<img src={dog.src} width="200px" />{' '}
					</NavLink>
				);
			})}
		</div>
	);
};

export default AllDogs;
