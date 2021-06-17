import React,{Fragment,useState} from 'react'
import {DivImage,InfoImage} from './index'
import {Profile} from '../ImageProfile/Profile'
import {LineDivisor} from '../../style/GlobalStyle'
import {Comment} from '../Comments/Comment'
import {Comment as addComment} from '../PhotoCard/Comment'
import { MdFavoriteBorder,MdSend,MdChatBubbleOutline } from 'react-icons/md'


export const ImageOpen = ({isActive}) =>{
	const URL_IMAGE=`https://m.media-amazon.com/images/I/812z9WyQ0EL._SS500_.jpg`
	
	const openImage = ()=>{
		return(
			<Fragment>
			
			<DivImage>
				<img src={URL_IMAGE} alt=""/>
				<InfoImage>
					<div className="dataProfile">
						<Profile size="Medium"/>
						<p>Name Profile</p>
					</div>
					<LineDivisor/>
					<div className="comment">
							<Comment/>
							<Comment/>
							<Comment/>
							<Comment/>
							<Comment/>
					</div>
					<div className="buttons">
						<MdFavoriteBorder size="29px" color="#262626"/>
						<MdChatBubbleOutline size="29px" color="#262626"/>
						<MdSend size="29px " color="#262626"/>
					</div>
					<div className="info">
						<p>7,291 Me gusta</p>
						<p className="date">HACE 3 HORAS</p>
						
					</div>
				</InfoImage>
			</DivImage>
			</Fragment>
		)
	}
	return(
		<Fragment>
			{
				isActive && openImage()
			}
		</Fragment>
	)
} 