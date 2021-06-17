import React from 'react'
import {DivInfo} from './styled'

import {Profile} from '../ImageProfile/Profile'

import { MdCheck,MdExpandMore,MdMoreHoriz } from "react-icons/md";

export const Info =()=>{
	return(
		<DivInfo>
			<Profile size="XLarge"/>
			<div className="Principal">
				<div className="PrincipalInfo">
					<h2>Name Profile</h2>
					<button>Enviar mensaje</button>
					<button><MdCheck/></button>
					<button><MdExpandMore/></button>
					<button><MdMoreHoriz/></button>
				</div>
				<div className="information">
					<p>3612 Publicaciones</p>
					<p>2m Seguidores</p>
					<p>0 Seguidos</p>
				</div>
				<div>
					<span>
						Informacion adicional del perfil
					</span>
				</div>
			</div>
		</DivInfo>
	)
}