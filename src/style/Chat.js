import styled from 'styled-components'

export const Div = styled.div`
	display:grid;
	grid-template-areas: "user info info"
						"user box box"
						"user send send";

	grid-template-rows: 80px 1fr 80px;
 	grid-template-columns: 1fr 1fr 1fr;

 	max-width:60%;
	margin:auto;
	border:1px solid #dbdbdb;
	height:1000px;
	border-radius:5px;

	.Users{
		background:white;
		border-right:1px solid #dbdbdb;
		grid-area: user;
	}

	@media (max-width:768px){
		max-width:80%;
		height:90%;
	}

	@media (max-width:600px){
		max-width:90%;
		grid-template-columns: 0px 1fr 1fr;
		.Users{
			display:none;
		}
	}	
`

export const BoxMessage = styled.div`
	grid-area: box;
		
`

export const InfoUser = styled.div`
	grid-area:info;
	display:flex;
	background:white;
	align-items:center;
	padding-left:20px;
	border-bottom:1px solid #dbdbdb;
	p{
		font-size:16px;
		margin:0;
	}
	.active{
		font-size:13px;	
	}
		
`

export const SendMessage = styled.div`
	grid-area:send;
	text-align:center;
	width:100%;
	input{
		width:80%;
		height:40px;
		border:1px solid #dbdbdb;
		border-radius:20px;
		:focus{
			outline:none;
		}
	}
`