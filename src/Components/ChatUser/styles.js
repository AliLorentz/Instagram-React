import styled from 'styled-components'

export const Div = styled.div`
	display:flex;
	align-items:center;
	position:relative;
	padding:10px 15px;
	p{
		margin:0;
		font-size:14px;
	}
	.active{
		color:#8e8e8e;
	}
	.infoUser{
		margin-left:10px;
	}
	cursor:pointer;
	:hover{
		background:rgba(175,171,171,.1);
	}

	@media (max-width:600px){
		
		transform: scale(0.6);
		.infoUser{
			margin-left:0px;
		}
	}
`


export const Background = styled.div`
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;
	background:rgba(175,171,171,.2);
`