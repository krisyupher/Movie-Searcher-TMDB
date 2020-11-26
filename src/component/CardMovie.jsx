import React from 'react';
import { useHistory } from 'react-router-dom';
import AuxImagen from '../assets/404.jpg'
/* import PropTypes from 'prop-types'; */
import '../styles/CardMovie.scss'

const CardMovie = ({ movie }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/DetailTv/${movie.id}`)
	}
	return (
		<div className="CardMovieContainer" onClick={handleClick}>
			{ movie.poster_path !== null ?
				<img
					src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
					alt={movie.poster_path}
				/> :
				movie.backdrop_path !== null ?
					<img
						src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
						alt={movie.backdrop_path}
					/> :
					<img
						src={AuxImagen}
						alt="AuxImagen"
					/>
			}
			<div className="DataContainer">
				<h2>
					{movie.original_name}
				</h2>
				<p>
					{movie.overview}
				</p>
				<div className="Data">
					<strong>Range:</strong>
					<span>{movie.vote_average}</span>
				</div>
				<div className="Data">
					<strong>Popularity:</strong>
					<span>{movie.popularity}</span>
				</div>
			</div>
		</div>
	);
};

/* CardMovie.propTypes = {

};
 */
export default CardMovie;