/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

const Prueba = () => {
	const [data, setData] = useState({
		email: "",
		radio: "",
	})
	const [validacion, setValidacion] = useState(null)
	const FuntValidacion = () => {
		setValidacion(true)
		Object.keys(data).map((key) => {
			if (data[key] === "") {
				setValidacion(false)
			}
		})
	}
	return (
		<div>
			<input type="text" onChange={(e) => {
				setData({ ...data, email: e.target.value })
			}} />
			<div>
				<input type="radio" name="radioPrueba" value="lala"
					onChange={(e) => {
						setData({ ...data, radio: e.target.value })
					}}
				/> lala<br />
				<input type="radio" name="radioPrueba" value="lele"
					onChange={(e) => {
						setData({ ...data, radio: e.target.value })
					}} /> lele<br />
				<input type="radio" name="radioPrueba" value="lili"
					onChange={(e) => {
						setData({ ...data, radio: e.target.value })
					}} /> lili
			</div>
			{console.log("data", data)}
			{console.log("validacion", validacion)}
			{validacion === false &&
				<div>
					Todo mal
				</div>
			}
			<button onClick={()=>{
				FuntValidacion()
			}}>Validar</button>
		</div>
	);
};

export default Prueba;