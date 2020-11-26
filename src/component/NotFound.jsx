import React from 'react';
import '../styles/NotFound.scss';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
	const history = useHistory();
	return (
		<div className="NotFoundContainer">
			<h3>your search was unsuccessful</h3>
			<div>
				<p className="P404">404</p>
				<p className>Page not found</p>
			</div>
			<button onClick={() => {
				history.push(`/`)
			}}>Go back</button>
		</div>
	);
};

export default NotFound;