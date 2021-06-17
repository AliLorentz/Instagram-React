import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
body {
    background: #fafafa;
    margin:0;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    overflow-x:hidden;
  }

`
export const LineDivisor = styled.div`
	width:100%;
	height:1px;
	background:#dbdbdb;
`

export const Link = styled(LinkRouter)`
	color:black;
	text-decoration:none;
	:hover{
		text-decoration:underline;
	}
`

export const Background = styled.div`
	position:fixed;
	background-color:rgba(0,0,0,.5);
	width:100%;
	height:100%;
	top:0;
	left:0;
	z-index:0;
	cursor:pointer;
`