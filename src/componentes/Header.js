import React from 'react';
import '../estilos/Header.css'

function Header(props){
	return(
		<header className="header">
			<div className="wrapper">
				<div className="header-grid">
					<div>
						<h1>Social Media Dashboard</h1>
						<p className="header-total">Total Followers: 18,000</p>
					</div>
					{props.children}
				</div>
			</div>
		</header>
	)
}

export default Header;