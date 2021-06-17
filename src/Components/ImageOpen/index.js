import styled from 'styled-components'


export const DivImage = styled.div`
	position:fixed;
	top:250px;

	z-index:1;
	width:935px;
	margin:auto;
	display:flex;

	@media (max-width:768px){
		flex-direction:column;
		width:90%;
		top:40px;	
		box-sizing: border-box;
		height:90vh;
		overflow-y:scroll;
	}

`
export const InfoImage=styled.div`
	background:white;
	width:40%;
	padding:10px;
	.dataProfile{
		display:flex;
		align-items:center;
		padding:10px;

		p {
			margin-left:10px;
			font-size:14px;
		}
	}

	.comment{
		padding:10px;
		overflow-y:scroll;
		height:300px;
	}

	.buttons{
		margin-left:10px;
		width:30%;
		display:flex;
		justify-content:space-around;
	}
	.info{
		margin-left:20px;
		margin-top:5px;
		p{
			margin:0;
			font-size:14px;
		}
		.date{
			font-size:10px;
			color:#8e8e8e;
		}
	}

	@media (max-width:768px){
		box-sizing: border-box;
		width:100%;	
	}
		
`

