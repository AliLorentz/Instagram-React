import styled from 'styled-components'

export const Div = styled.div`
	box-shadow: 0px 0px 31px -1px rgba(0,0,0,0.20);
	position:absolute;
	left:50px;
	top:25px;
	border:1px solid #dbdbdb;
	border-radius:5px;
	background:white;
	width:350px;
	overflow:hidden;
	
	.Nav{
		display:flex;
		padding:5px 16px;
	}
	.information-user{
		
	}
`


export const StadisticProfile = styled.div`
	display:flex;
	justify-content:space-around;
	padding:10px 0;	
	text-align:center;
` 

export const Gallery = styled.div`
	width:100%;
	display:Flex;
	margin-left:-2px;
	img{
		width:118px;
		cursor:pointer;
		:hover{
			opacity:.8;
		}
	}
`

export const Gray = styled.p`
	color:rgb(142, 142, 142);
`
export const Buttons = styled.div`
	display:flex;
	justify-content:space-around;
	width:100%;
	padding:10px 0;

	button{
		width:110px;
		padding:5px;
		background:none;
		border:1px solid #dbdbdb;
		cursor:pointer;
	}
	

`

export const LineDivisor = styled.div`
	width:100%;
	height:1px;
	background:#dbdbdb;
`