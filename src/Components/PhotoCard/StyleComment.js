import styled from 'styled-components'

export const AddComments= styled.div`
	padding:0 16px 0 16px;
	display:flex;
	align-items:center;	
	color:#8e8e8e;
	margin-bottom:15px;
	p{
		margin-left:10px;
	}

	form{
		display:flex;	
	}


	

`

export const Input =styled.input`
	width:450px;
	border:none;
	margin-left:15px;

	@media (max-width:500px){
		width:60%;
	}

`

export const Submit = styled.input`
	color:#0095f6;
	border:none;
	:hover{
		cursor:pointer;
	}
	background:none;

`
