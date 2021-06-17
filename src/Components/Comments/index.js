import styled from 'styled-components'

export const Content = styled.div`
	font-size:14px;
	display:flex;

	.userProfile{
		font-weight:600;
		margin-right:4px;
		a{
			color:black;
			text-decoration:none;
		}
		:hover{
			text-decoration: underline;
			cursor:pointer;
		}
	}

	.contentComments{
		padding:8px;
	}
`

export const InfoComment = styled.div`
	display:flex;
	p{
		margin-right:20px;
	}
	color:#8e8e8e;
`