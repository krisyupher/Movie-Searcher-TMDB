import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import lupa from '../assets/lupa.svg';
import notFoundImage from '../assets/notFoundImage.jpg';
/* import PropTypes from 'prop-types'; */
import logo from '../assets/logo MovieDB.svg';
import '../styles/Header.scss';

const Header = props => {
	const [text, setText] = useState("")
	const [result, setResult] = useState("")
	const [viewResult, setViewResult] = useState(false)
	const history = useHistory();
	useEffect(() => {
		console.log("text", text)
		fetch(`https://api.themoviedb.org/3/search/tv?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=1&query=${text}&include_adult=false`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log("data", data)
				setResult(data)
			})
			.catch(() => {
				setText(null)
			})
	}, [text])
	return (
		<div>
			<div className="HeaderContainer">
				<Link to="/" className="HeaderTittle">
					<img className="logoImg" src={logo} alt="logo" />
				</Link>
				<div
					className="searchContainer"
					onSelect={() => {
						setViewResult(true)
					}}
				>
					<div className="inputContainer" onBlur={()=>{
						setTimeout(() => {
							setViewResult(false)
						}, 100);
					}}>
						<input type="text" onChange={(e) => {
							setText(e.target.value)
							e.target.value = e.target.value.replace(/[#@]/g, "");
						}} />
						<button onClick={() => {
							history.push(`/Search/${text}`)
						}}>
							<img className="lupa" src={lupa} alt="lupa" />
						</button>
					</div>
					{(viewResult && result && !result.errors) &&
						<div className="resultContainer" >
							<div className="results">
								{result.results.map((item, index) => {
									if (index < 9) {
										return (
											<div className="itemResult" key={item.id}
												onClick={() => {
													setViewResult(false)
													console.log("item.id", item.id)
													history.push(`/DetailTv/${item.id}`)
												}}>
												{item.backdrop_path ?
													<img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} alt={item.backdrop_path} /> :
													item.poster_path ?
														<img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.poster_path} /> :
														<img src={notFoundImage} alt={notFoundImage} />
												}
												<div className="DataContainer">
													<strong>{item.name}</strong>
													<span><strong>first air date:</strong>{item.first_air_date}</span>
													<span><strong>vote average:</strong>{item.vote_average}</span>
												</div>
											</div>
										)
									}
									else {
										return null
									}
								})}
							</div>
						</div>
					}
				</div>
				<div>
					<a
						href="https://co.linkedin.com/in/cristian-florez-a291b3161"
					>
						<h4>Cristian Florez</h4>
					</a>
					<a
						href="https://github.com/krisyupher"
					>
						<h4>Developer FrontEnd</h4>
					</a>
				</div>
			</div>
			{console.log("result", result)}
		</div>
	);
};

/* Header.propTypes = {

}; */

export default Header;