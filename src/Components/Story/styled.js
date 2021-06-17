import styled from 'styled-components'
import {Div} from '../PhotoCard/styles.js'

export const DivStory = styled.div`
	margin:auto;
	width:600px;
	border:1px solid #dbdbdb;
	border-radius:3px;
	padding:5px 16px;
	box-sizing: border-box;
	display:flex;
	overflow:hidden;

	@media (max-width: 500px){
		width:100%;
		
	}
	
`

export const StorySingle = styled.div`
	padding:0 10px;
	width:72px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	cursor:pointer;
	p{
		font-size:12px;
		margin:5px 0 5px 0;
	}

	
`