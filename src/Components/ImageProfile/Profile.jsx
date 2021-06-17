import React,{Fragment} from 'react'
import {ImageMedium,ImageLarge,FrameMedium,FrameLarge,FrameXLarge,ImageXLarge} from './style'
import {Link} from 'react-router-dom'

export const Profile =({size="Large",image=`https://cdn.shopify.com/s/files/1/0252/6822/4088/t/54/assets/logo_facebook.png?v=14636856715189202634`,story=true})=>{


	
	const sizeImage = ()=>{
		if(size==='Medium'){
			return <FrameMedium><ImageMedium src={image} /></FrameMedium>
		}else if(size==='Large'){
			return <FrameLarge><ImageLarge src={image} /></FrameLarge>
		}else if(size==='XLarge'){
			return <FrameXLarge><ImageXLarge src={image} /></FrameXLarge>
		}
	}

	const isStory =()=>{
		if(story){
			return(
			<Link to="/user">
				{
					sizeImage()
				}
			</Link>
		)
		}else{
			return(
			<Link to="/story">
				{
					sizeImage()
				}
			</Link>
			)
		}
		
	}

	return(
		<Fragment>
			{isStory()}
		</Fragment>
	)
}