import React,{Fragment} from 'react'
import styled from 'styled-components'
import {Info} from '../Components/Info/Info'
import {Story} from '../Components/StoryProfile/Story'
import {LineDivisor} from '../Components/InfoProfile/styled'
import {Gallery} from '../Components/Gallery/Gallery'



const Content = styled.div`
	width:100%;
	margin:auto;
`


export const Profile = () =>{
	return(
		<Content>
			<Info/>
			<Story/>
			<LineDivisor/>
			<Gallery/>
			
		</Content>
	)
} 