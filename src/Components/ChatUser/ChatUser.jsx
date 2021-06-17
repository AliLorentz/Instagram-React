import React,{Fragment} from 'react'
import {Profile} from '../ImageProfile/Profile'
import {Div,Background} from './styles'

export const ChatUser =({active=false})=>{
	const background=()=>{
		return(
			<Background/>
		)
	}
	return(
		<Div>
		{active && background()}
			<Profile size='Large'/>
			<div className="infoUser">
				<p>NameUser</p>
				<p className="active">Activo(a) hace 2h</p>
			</div>
		</Div>
	)
}