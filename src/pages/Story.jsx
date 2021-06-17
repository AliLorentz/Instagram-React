import React,{Fragment} from 'react'
import {NextStory,SecondNextStory,BeforeStory,NavigateNext,NavigateBefore} from './storyStyle'

import {ViewStory} from '../Components/ViewStory/ViewStory'
import {Background} from '../style/GlobalStyle'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
export const Story =(props)=>{
	return(
		<Fragment>
			<Background onClick={props.history.goBack}/>
			<ViewStory/>
			<NavigateNext/>
			<NavigateBefore/>
			<NextStory></NextStory>
			<SecondNextStory></SecondNextStory>
			<BeforeStory></BeforeStory>
		</Fragment>
	)
} 