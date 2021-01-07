import React from 'react';
import '../estilos/Cards.css';
import Card from './Card.js'; 

const cardData = [
	{
		id:0,
		logo:'images/facebook.png',
		username : "@DanielBravo",
		followers : "1987",
		today: 11,
		color:'facebook'
	},
	{
		id:1,
		logo:'https://www.educativa.com/wp-content/uploads/2014/01/twitterenformacion.png',
		username : "@IkerCordova",
		followers : "1044",
		today: 12,
		color:'twitter'
	},
	{
		id:2,
		logo:'images/instagram.png',
		username : "@DanielBravo",
		followers : "11K",
		today: 13,
		color:'instagram'
	},
	{
		id:3,
		logo:'images/facebook.png',
		username : "@DanielBravo",
		followers : "1987",
		today: 14,
		color:'youtube'
	}
]

function Cards(){
	console.log(cardData)
	return(
		<section className="top-cards">
		<div className="wrapper">
			<div className="grid">
				{cardData.map((card) => <Card key={card.id} card={card}/>)}				
			</div>
		</div>
		</section>
	)
}

export default Cards;