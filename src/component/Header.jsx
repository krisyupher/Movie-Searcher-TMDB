import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import lupa from '../assets/lupa.svg'
/* import PropTypes from 'prop-types'; */
import logo from '../assets/logo MovieDB.svg';
import '../styles/Header.scss';

const Header = props => {
	const [text, setText] = useState("")
	const history = useHistory();
	return (
		<div className="HeaderContainer">
			<Link to="/" className="HeaderTittle">
				<img className="logoImg" src={logo} alt="logo"/>
			</Link>
			<div className="inputContainer">
				<input type="text" onChange={(e) => {
					e.target.value = e.target.value.replace(/[#@]/g, "");
					setText(e.target.value)
				}} />
				<button onClick={() => {
					history.push(`/Search/${text}`)
				}}>
					<img className="lupa" src={lupa} alt="lupa" />
				</button>
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
	);
};

/* Header.propTypes = {

}; */

export default Header;