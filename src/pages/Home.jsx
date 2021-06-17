import React,{Fragment,Component,useState,useEffect} from 'react'
import {Card} from '../Components/PhotoCard/Card'
import {Story} from '../Components/Story/Story.jsx'
//Simulacion de una API
import * as data from '../../API/db.json'

export const Home = ()=>{

	const [gallery,setGallery] = useState([])

	 useEffect(() => {
    	setGallery(data.main)
  	});

	return(
		<Fragment>
			<Story/>
			{
				gallery.map(({id,name,apodo,image,imageProfile,likes,description})=>{
					return(<Card key={id}
					 id={id}
					 name={name}
					 apodo={apodo}
					 image={image}
					 imageProfile={imageProfile}
					 likes={likes}
					 description={description}

					 />)
				})
			}
		</Fragment>
	)
}

