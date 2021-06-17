import React,{useState} from 'react'
import {DivGallery,Image} from './index'
import {Background} from '../../style/GlobalStyle'
import {ImageOpen} from '../ImageOpen/ImageOpen'


export const Gallery = () =>{
	const IMAGE_URL=`https://m.media-amazon.com/images/I/812z9WyQ0EL._SS500_.jpg`;
	const [openImage,setOpenImage] = useState(false)

	const handleClick=()=>{
		if(openImage)
			setOpenImage(false)
		else
			setOpenImage(true)
	}

	return(
		<DivGallery>
			{openImage && <Background onClick={handleClick}/>}
			<Image onClick={handleClick} src={IMAGE_URL}/>
			<Image onClick={handleClick} src={IMAGE_URL}/>
			<Image onClick={handleClick} src={IMAGE_URL}/>
			<Image onClick={handleClick} src={IMAGE_URL}/>
			<ImageOpen isActive={openImage}/>
		</DivGallery>
	)
}