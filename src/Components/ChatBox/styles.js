import styled from 'styled-components'

export const Div = styled.div`
	display:flex;
	flex-direction: column;
	overflow-x:hidden;
	overflow-y: scroll;
	height:100%;
	padding:20px;
	box-sizing: border-box;
`

export const OwnMsm = styled.div`
	width:250px;
	margin-left:50%;
	padding:5px;
	background:#efefef;
	border-radius:10px;
	margin-bottom:10px;
	font-size:15px;

	@media (max-width:768px){
		width:40%;
	}
`

export const UserMsm= styled.div`
	width:250px;
	padding:5px;
	border-radius:10px;
	margin-bottom:10px;
	border:1px solid #efefef;
	font-size:15px;

	@media (max-width:768px){
		width:40%;
	}
`