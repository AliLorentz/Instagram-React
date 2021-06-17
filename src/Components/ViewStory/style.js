import styled from 'styled-components'
export const Div = styled.div`
	height:80%;
	width:30%;
	position:absolute;
	left:33%;
	top:10%;
	background:black;
	border-radius:10px;
	padding:20px;
	box-sizing: border-box;

	@media (max-width : 768px){
		left:10%;
		width:80%;
		height:70%;
	}

`

export const InfoUser=styled.div`
	display:flex;
	color:white;
	justify-content:space-between;
	.user{
		display:flex;
		align-items:center;
		p{
			margin-left:10px;
			font-size:15px;
		}
	}

	.icons{
		display:flex;
		align-items:center;
	}

	@media (max-width : 768px){
		.user{
			p{
				font-size:10px;
			}
		}
	}
`

export const Answer = styled.div`
	display:flex;
	align-items:center;
	position:absolute;
	bottom:40px;
	color:white;
	input{
		border:1px solid white;
		background:none;
		width:380px;
		height:40px;
		border-radius:30px;
		text-align:center;
		margin-right:10px;
	}

	@media (max-width : 500px){
		justify-content:center;
		input{
			width:120%;
		}
	}
` 