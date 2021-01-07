import React from 'react';
import '../estilos/Overview.css';
import CardSmall from './CardSmall.js';

const listCardSmall = [
	{
		id:1,
		title:'Page Views',
		number:'87',
		porcentage:'2%',
		icon:'images/facebook.png'
	},
	{
		id:2,
		title:'Likes',
		number:'52',
		porcentage:'2%',
		icon:'images/facebook.png'
	},
	{
		id:3,
		title:'Likes',
		number:'5462',
		porcentage:'2257%',
		icon:'images/instagram.png'
	},
	{
		id:4,
		title:'Profile Views',
		number:'52k',
		porcentage:'1375%',
		icon:'images/instagram.png'
	},
	{
		id:5,
		title:'Retweets',
		number:'117',
		porcentage:'303%',
		icon:'https://www.educativa.com/wp-content/uploads/2014/01/twitterenformacion.png'
	},
	{
		id:6,
		title:'Likes',
		number:'507',
		porcentage:'553%',
		icon:'https://www.educativa.com/wp-content/uploads/2014/01/twitterenformacion.png'
	},
	{
		id:7,
		title:'Likes',
		number:'87',
		porcentage:'12%',
		icon:'images/facebook.png'
	},
	{
		id:8,
		title:'Total Views',
		number:'1407',
		porcentage:'12%',
		icon:'images/facebook.png'
	}
]

function Overview(){
	return(
		<section className="overview">
		<div className="wrapper">
			<h2>Overview - Today</h2>
			<div className="grid">
				{listCardSmall.map((cardSmall)=><CardSmall key={cardSmall.id} cardSmall={cardSmall}/>)}
			</div>
		</div>
	</section>
	)
}

export default Overview;