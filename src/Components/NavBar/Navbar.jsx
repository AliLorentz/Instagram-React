import React from 'react'
import {NavBar} from './styled'
import {Link} from '../../style/GlobalStyle'
import {BrowserRouter} from 'react-router-dom'

import { MdHome,MdGpsFixed,MdSend,MdFavoriteBorder } from 'react-icons/md'

export const Navbar = () =>{
	const Logo = `https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png`;
	const SIZE_ICONS="26px"
	return(
		<NavBar>
			<div className="content">
				<Link to="/"><img src={Logo} alt="Logo"/></Link>
				 <input type="text" placeholder="Buscar"/>
				<div className="Icons">
					<Link to="/"><MdHome size={SIZE_ICONS}/></Link>
					<Link to="/chat"><MdSend size={SIZE_ICONS} /></Link>
					<MdGpsFixed size={SIZE_ICONS}/>
					<MdFavoriteBorder size={SIZE_ICONS}/>
				</div>
			</div>
		</NavBar>
	)
}