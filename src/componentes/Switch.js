import React,{useState} from 'react';
import '../estilos/Switch.css';

function Switch(){

	const [value,setValue] = useState(true);

	function handleChange(){
		setValue(!value);
		console.log(value)
		if(value){
			document.body.classList.remove('is-light-mode');
			document.body.classList.add('is-dark-mode');
		}else{
			document.body.classList.add('is-light-mode');
			document.body.classList.remove('is-dark-mode');
		}
	}

	return(
		<div className="dark-mode">
			<p>Dark Mode</p>
			<label className="switch">
				<input onChange={handleChange} type="checkbox" name="" id="checkbox"/>
				<span className="slider round"></span>
			</label>
		</div>
	)
}

export default Switch;