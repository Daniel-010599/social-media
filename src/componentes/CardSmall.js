import React from 'react';

function CardSmall(props){
	return(
		<div className="card-small">
			<p className="card-small-views">{props.cardSmall.title}</p>
			<p className="card-small-icon"><img src={props.cardSmall.icon} alt="facebook"/></p>
			<p className="card-small-number">{props.cardSmall.number}</p>
			<p className="card-small-porcentage">{props.cardSmall.porcentage}</p>
		</div>
	)
}

export default CardSmall;