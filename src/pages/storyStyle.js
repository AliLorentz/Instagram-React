import styled from 'styled-components'
import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";


export const NextStory = styled.div`
	height:35%;
	width:15%;
	background:black;
	border-radius:10px;
	position:absolute;
	top:28%;
	left:70%;
	
	@media (max-width : 768px){
		display:none;
	}

`

export const SecondNextStory = styled.div`
	height:35%;
	width:15%;
	background:black;
	border-radius:10px;
	position:absolute;
	top:28%;
	left:90%;

	@media (max-width : 768px){
		display:none;
	}
`

export const BeforeStory= styled.div`
	height:35%;
	width:15%;
	background:black;
	border-radius:10px;
	position:absolute;
	top:28%;
	left:10%;	
	@media (max-width : 768px){
		display:none;
	}
`

export const NavigateNext = styled(MdNavigateNext)`
	color:#343a40;
	font-size:25px;
	position:absolute;
	top:500px;
	left:1020px;
	cursor:pointer;
	background:#ced4da;
	padding:3px;
	border-radius:100%;
	:hover{
		background:white;
		color:black;
	}
	@media (max-width : 768px){
		display:none;
	}
`

export const NavigateBefore=styled(MdNavigateBefore)`
	color:#343a40;
	font-size:25px;
	position:absolute;
	top:500px;
	left:480px;
	cursor:pointer;
	background:#ced4da;
	padding:3px;
	border-radius:100%;
	:hover{
		background:white;
		color:black;
	}
	@media (max-width : 768px){
		display:none;
	}
`