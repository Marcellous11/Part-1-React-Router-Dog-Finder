import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dog from './Dog';
import { v4 as uuid } from 'uuid';
import AllDogs from './AllDogs';
const MyRoutes = ({ dogs }) => {
	return (
		<Routes>
			{dogs.map((dog) => {
				return (
					<Route key={uuid()} exact path={`/dogs/${dog.name}`} element={<Dog key={uuid()} dogs={dog} />} />
				);
			})}
			{/* <Route key={uuid()} exact path={`/dogs/:name`} element={<Dog dogs={dogs} />} />; */}
			<Route key={uuid()} exact path="/dogs" element={<AllDogs key={uuid()} dogs={dogs} />} />
		</Routes>
	);
};
export default MyRoutes;
