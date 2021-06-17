import React,{Fragment} from 'react'
import {Div,InfoUser,Answer} from './style'
import {Profile} from '../ImageProfile/Profile'

import {MdPlayArrow,MdVolumeDown,MdMoreVert,MdSend} from 'react-icons/md'

export const ViewStory =()=>{
	const ICONS_SIZE="25px";
	return(
		<Div>
			<InfoUser>
				<div className="user">
					<Profile size="Medium" />
					<p>UserName</p>
				</div>
				<div className="icons">

					<MdPlayArrow size={ICONS_SIZE}/>
					<MdVolumeDown size={ICONS_SIZE}/>
					<MdMoreVert size={ICONS_SIZE}/>

				</div>
			</InfoUser>
			<Answer>
				<form action="">
					<input type="text" placeholder="Responde"/>
				</form>
				<MdSend size={ICONS_SIZE}/>
			</Answer>
		</Div>
	)
}