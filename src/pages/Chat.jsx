import React from 'react'
import {Div,BoxMessage,InfoUser,SendMessage} from '../style/Chat'
import {ChatUser} from '../Components/ChatUser/ChatUser'
import {Profile} from '../Components/ImageProfile/Profile'
import {ChatBox} from '../Components/ChatBox/ChatBox'

export const Chat=()=>{
	return(
		<Div>
			<div className="Users">
				<ChatUser active={true}/>
				<ChatUser/>
				<ChatUser/>
				<ChatUser/>
				<ChatUser/>
				<ChatUser/>
				<ChatUser/>
			</div>
			<InfoUser>
				<Profile size='Medium'/>
					<div>
						<p>NameUser</p>
						<p className="active">Activo(a) hace 2 Horas</p>
					</div>
			</InfoUser>
			<BoxMessage>
				<ChatBox/>
			</BoxMessage>
			<SendMessage>
				<input type="text" placeholder="Envia un mensaje..."/>
			</SendMessage>
		</Div>
	)
}