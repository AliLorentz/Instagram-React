import React from 'react'
import {Div} from './styles'
import {OwnMessage} from './OwnMessage'
import {UserMessage} from './UserMessage'

export const ChatBox=()=>{
	return(
		<Div>
			<OwnMessage/>
			<UserMessage/>
			<OwnMessage/>
			<OwnMessage/>
			<UserMessage/>
			<UserMessage/>
		</Div>
	)
}