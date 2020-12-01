import React, { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import auxImg from '../assets/404.jpg'
import 'react-tabs/style/react-tabs.css';
import '../styles/TvDetail.scss';
/* import PropTypes from 'prop-types';
 */
const TvDetail = ({ match, history }) => {
	const [tvShow, setTvShow] = useState('')
	const [season, setSeason] = useState()
	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=b2907782d07859a652052d3bae537475`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setTvShow(data)
				SearchSeason(0)
			})
			.catch(() => {
				console.log("Grave error")
			})
	}, [match])
	const SearchSeason = (index) => {
		fetch(`https://api.themoviedb.org/3/tv/${match.params.id}/season/${index}?api_key=b2907782d07859a652052d3bae537475`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setSeason(data)
			})
			.catch(() => {
				console.log("Grave error")
			})
	}
	function handleClick() {
		history.goBack()
	}
	return (
		<div className="TvDetailContainer">
			{
				(tvShow && tvShow !== '') &&
				<>
					<div>
						<div className="BackContainer">
							<button className="back" onClick={handleClick}>
								{"← Back"}
							</button>
						</div>
						<CardMovie movie={tvShow}></CardMovie>
					</div>
					<div className="Tabs">
						<h3>SEASONS</h3>
						<div className="TabList">
							{(tvShow && tvShow.seasons.length > 0) && tvShow.seasons.map((item, index) => {
								return (
									<div
										className="Tab"
										key={index}
										onClick={() => SearchSeason(index)}>
										{index + 1}
									</div>
								)
							})}
						</div>
						{/* 	{(tvShow && tvShow.seasons.length > 0) && tvShow.seasons.map((item, index) => {
							return (
								<div key={index}> */}
						{(season && season.episodes && season.episodes.length > 0) &&
							season.episodes.map((item, index) => {
								return (
									<div key={index} className="episodesContainer">
										<p>{index + 1}</p>
										<p>
											{item.name}
										</p>
									</div>
								)
							})
						}
						{/* 	</div>
							)
						})} */}
					</div>
				</>
			}
			{console.log("tvShow.poster_path", tvShow)}
		</div>
	);
};

TvDetail.propTypes = {

};

export default TvDetail;