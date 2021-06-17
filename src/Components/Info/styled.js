import styled from 'styled-components'

export const DivInfo = styled.div`
	display:flex;
	justify-content:space-around;
	width:60%;
	margin:auto;
	margin-bottom:20px;

	.Principal{
		width:60%;
	}

	.PrincipalInfo{
		display:flex;
		align-items:center;
		h2{
			margin:0;
			font-weight:300;
			font-size:28px;
		}
		button{
			border:1px solid #dbdbdb;
			background:none;
			padding:5px 15px;
			border-radius:3px;
			cursor:pointer;
			margin-left:8px;
		}
	}

	.information{
		display:flex;
		p{
			margin-right:40px;
		}
	}

	@media (max-width : 768px){

		transform: scale(0.9);
		flex-direction:column;
		width:95%;
		.PrincipalInfo{
			margin-top:20px;
			h2{
				font-size:15px;
			}
		}
	}
`