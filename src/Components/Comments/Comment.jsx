import React,{Fragment} from 'react'
import {Profile} from '../ImageProfile/Profile'
import {Content,InfoComment} from './index'

export const Comment = () =>{
	return(
		<Content>
			<Profile size="Medium"/>
				<div className="contentComments">
					<span className="userProfile"><a href="#">NameUser</a></span>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
						libero sapiente esse, distinctio atque harum eaque quae commodi veritatis
						earum. Itaque sed incidunt repudiandae tenetur
						aut qui ducimus debitis numquam.
					</span>
					<InfoComment>
						<p>1 h</p>
						<p>40 Me gusta</p>
					</InfoComment>
				</div>
		</Content>

	)
}