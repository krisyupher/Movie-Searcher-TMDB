import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardMovie from '../component/CardMovie';
import NotFound from './NotFound';
/* import PropTypes from 'prop-types'; */
import "../styles/Hero.scss";
const Hero = ({ match, history }) => {
	const moviesList = useSelector((state) => state.moviesList)
	const resultList = useSelector((state) => state.resultList)
	const [scrollYAux, setScrollYAux] = useState(1)
	const [paintMovies, setPaintMovies] = useState([])
	const dispatch = useDispatch()
	window.onscroll = function () {
		var y = window.scrollY;
		var x = document.body.scrollHeight;
		if ((x - 1000) <= y) {
			setScrollYAux(scrollYAux + 1)
		}
	};
	const ApiMovieList = (scroll) => {
		fetch(`https://api.themoviedb.org/3/tv/popular?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=${scroll}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				dispatch({
					type: 'SET_MOVIES_LIST', /* Accion en la funcion reducer */
					payload: data /* Estado en la funcion reducer */
				})
			})
			.catch(() => {
				console.log("Grave error")
			})
	}
	const ApiResultList = (scroll) => {
		fetch(`https://api.themoviedb.org/3/search/tv?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=${scroll}&query=${match.params.id}&include_adult=false`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				dispatch({
					type: 'SET_RESULT_LIST',
					payload: data
				})
			})
			.catch(() => {
				console.log("Grave error")
			})
	}
	useEffect(() => {
		if (typeof match.params.id === "string") {
			ApiResultList(scrollYAux)
		} else {
			ApiMovieList(scrollYAux)
		}
	}, [scrollYAux, match])
	useEffect(() => {
		if (typeof match.params.id === "string") {
			setScrollYAux(1)
			dispatch({
				type: 'SET_MOVIES_CLEAR',
				payload: []
			})
			dispatch({
				type: 'SET_RESULT_CLEAR',
				payload: []
			})
		} else {
			setScrollYAux(1)
			dispatch({
				type: 'SET_RESULT_CLEAR',
				payload: []
			})
		}
	}, [match])
	useEffect(() => {
		if (resultList.length !== 0) {
			setPaintMovies(resultList)
		} else {
			setPaintMovies(moviesList)
		}
	}, [moviesList, resultList])
	return (
		<div className="HeroContainer">
			<div className="CardMovies">
				{(paintMovies !== undefined && paintMovies.length > 0) ?
					paintMovies.map((movie, index) => {
						return (
							<CardMovie movie={movie} key={index} />
						)
					}) :
					<NotFound />
				}
			</div>
			{console.log("moviesList", moviesList)}
		</div>
	);
};
/* 
Hero.propTypes = {

};
 */
export default Hero;