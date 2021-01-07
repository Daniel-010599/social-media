import React from 'react';

function Card(props){
	console.log(props);
	const color = `card ${props.card.color}`;
	return(
		<article className={color}>
			<p className="social-media">
				<img src={props.card.logo} alt="facebook" className="icon-social-media"/>
				{props.card.username}
			</p>
			<p className="card-followers">
				<span className="number-followers">{props.card.followers}</span>
				<span className="title-followers">Followers</span>
			</p>
			<p className="card-today">{props.card.today} Today</p>
		</article>
	)
}

export default Card;