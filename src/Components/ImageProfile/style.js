import styled from 'styled-components'

const Image = styled.img`
	border-radius:100%;
	background:white;
	padding: .001px;
	margin-left:.5px;
`

export const ImageMedium = styled(Image)`
	width:32px;
	height:32px;
`

export const ImageLarge = styled(Image)`
	width:57px;
	height:57px;
`

export const ImageXLarge = styled(Image)`
	width:150px;
	height:150px;
`


const Frame = styled.div`
	padding:2px;
	display:flex;
	border-radius:100%;
	aling-items:center;
	background: linear-gradient(180deg, #ff9d7a 0, #ff8f83 10%, #ff8089 20%, #ff718d 30%, #ff628d 40%, #f25389 50%, #d34683 60%, #b63c7d 70%, #9e3678 80%, #883174 90%, #752e71 100%);
`

export const FrameLarge= styled(Frame)`
	width:57px;
	height:57px;
`

export const FrameMedium= styled(Frame)`
	width:32px;
	height:32px;

`

export const FrameXLarge=styled(Frame)`
	width:150px;
	height:150px;
`