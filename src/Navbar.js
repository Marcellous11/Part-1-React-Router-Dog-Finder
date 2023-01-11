import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Navbar = ({ dogs }) => {
	return (
		<div>
			<NavLink to="/dogs">All Dogs</NavLink>
			<ul>
				{dogs.map((d) => {
					return (
						<NavLink e key={uuid()} to={`/dogs/${d.name}`}>
							<li> {d.name}</li>
						</NavLink>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
