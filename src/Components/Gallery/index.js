import styled from 'styled-components'

export const DivGallery = styled.div`
	display:flex;
	justify-content:space-between;
	flex-wrap: wrap;
	width:60%;
	margin:auto;

	@media (max-width : 768px){
		width:95%;
	}
	
`

export const Image = styled.img`
	width:294px;
	margin-top:30px;
	cursor:pointer;
	:hover{
		opacity:.7;
	}
	width:33%;

`


