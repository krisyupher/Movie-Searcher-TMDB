import React, { useEffect, useState } from 'react';
import CardMovie from '../component/CardMovie';
import PropTypes from 'prop-types';
import '../styles/MovieDetail.scss';

const MovieDetail = ({ match, history }) => {
	const [movie, setMovie] = useState()
	function handleClick() {
		history.goBack()
	}
	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b2907782d07859a652052d3bae537475`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setMovie(data)
			})
			.catch(() => {
				console.log("Grave error")
			})
	}, [])
	return (
		<div className="MovieDetailContainer">
			<button className="back" onClick={handleClick}>
				{"← Back"}
			</button>
			{ movie !== undefined &&
				<div className="wrapper">
					<CardMovie movie={movie} />
					<div className="DataContainer">
						<h1>
							{movie.original_title}
						</h1>
						<h3>
							{movie.genres.map((genre) => {
								return (
									genre.name
								)
							})}
						</h3>
						<h4>
							promedio de votos
						{movie.vote_average}
						</h4>
						<p>
							{movie.overview}
						</p>
					</div>
				</div>
			}
		</div>
	);
};

MovieDetail.propTypes = {

};

export default MovieDetail;