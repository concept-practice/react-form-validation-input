import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	return (
		<React.Fragment>
			<div>
				<Link to="/airplanes/add">Add an airplane!</Link>
			</div>
			<div>
				<Link to="/connected">Connected</Link>
			</div>
		</React.Fragment>
	);
};

export default Home;
