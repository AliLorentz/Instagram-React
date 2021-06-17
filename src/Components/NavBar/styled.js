import styled from 'styled-components'

export const NavBar = styled.div`

	display:flex;
	background:white;
	margin-bottom:30px;
	border-bottom:1px solid #dbdbdb;
	height:53px;
	box-sizing: border-box;

	p{
		margin:0
	}
	.content{
		margin:auto;
		width:50%;
		display:flex;
		justify-content:space-between;
	}
	.Icons{
		display:flex;
		justify-content:space-around;
		width:20%;
	}


	@media (max-width: 768px){
			
		.content{
			justify-content:space-around;
			display:flex;
			width:100%;
		}
		input{
			width:40%;
		}
		.Icons{
			width:30%;
		}
	}

	@media (max-width: 280px){
		img{
			display:none;
		}
		.Icons{
			width:50%;
			transform: scale(0.8);
		}
	}

`