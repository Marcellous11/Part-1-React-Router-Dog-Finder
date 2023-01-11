import React from 'react';
import { NavLink, useParams, redirect } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Dog = ({ dogs }) => {
	const { name } = useParams();

	return (
		<div>
			<h2>
				{' '}
				this is {dogs.name} and he is {dogs.age}
			</h2>
			<img width="200px" src={dogs.src} />
			<h3>Here are some facts about {dogs.name}</h3>
			{dogs.facts.map((fact) => {
				return <p key={uuid()}>{fact}</p>;
			})}
			<NavLink key={uuid()} to="/dogs">
				Back to all dogs{' '}
			</NavLink>
		</div>
	);
};
export default Dog;
