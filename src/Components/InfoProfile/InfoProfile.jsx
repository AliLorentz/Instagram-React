import React,{useEffect} from 'react'
import {Div,StadisticProfile,Gallery,Gray,Buttons,LineDivisor} from './styled'

import {Profile} from '../ImageProfile/Profile'
import {Link} from '../../style/GlobalStyle'

//Simulacion de una API
import * as data from '../../../API/db.json'

export const InfoProfile = (props) =>{

	let images=[]
	
	data.proyects.map(({id,gallery})=>{
			if(id==props.id){
				gallery.map(({image})=>{
					images.push(image)
				})
			}
		})

	const IMAGE_URL = `https://m.media-amazon.com/images/I/812z9WyQ0EL._SS500_.jpg`;
	return(
		<Div onMouseLeave={props.onMouseLeave}>
			<div className="Nav">
				<Profile size="Large"/>
					<div className="information-user">
						<Link to="/user"><p>Nombre Canal</p></Link>
						<Gray>Apodo</Gray>
						<Gray>1450 Seguidores</Gray>	
					</div>
			</div>
			<LineDivisor/>
			<StadisticProfile>
				<div>
					<p>1,123</p>
					<Gray>Apodo</Gray>
				</div>
				<div>
					<p>1,123</p>
					<Gray>Apodo</Gray>
				</div>
				<div>
					<p>1,123</p>
					<Gray>Apodo</Gray>
				</div>
			</StadisticProfile>
			<Gallery>
				
			
				<img src={images[0]} alt=""/>
				<img src={images[1]} alt=""/>
				<img src={images[2]} alt=""/>
			</Gallery>
			<Buttons>
				<button>Enviar Mensaje</button>
				<button>Seguir</button>
			</Buttons>
		</Div>
	)
}