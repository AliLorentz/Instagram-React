import styled from 'styled-components'

export const Div = styled.div`
	margin:40px auto;
	width:600px;
	border:1px solid #dbdbdb;
	border-radius:3px;
	box-sizing: border-box;


	@media (max-width: 500px){
		width:100%;	
	}
	
`

export const DataCard = styled.div`
	padding:16px;
	display:flex;
	justify-content:space-between;
	align-items:center;
	p{
		margin:0px;
	}
`

export const ProfileInfo = styled.div`
	display:flex;
	align-items:center;
	position:relative;
	p{
		font-size:14px;
		margin-left:14px;
	}
`

export const Likes = styled.p`
	margin:0 0 8px 0;

`
export const Comments = styled.p`
	margin:0 0 4px 0;
	font-size:14px;
`

export const Dates = styled.p`
	margin:0 0 4px 0;
	font-size:14px;
	color:#8e8e8e;
`

export const Info = styled.section`
	padding:0px 16px 0 16px;
`
export const Images = styled.img`
	width:100%;
`

