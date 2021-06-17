import React from 'react'
import {Profile} from '../ImageProfile/Profile'
import {StoryProfile} from './index'
import {SingleStory} from '../Story/SingleStory.jsx'

export const Story = () =>{
	return(
		<StoryProfile>
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>

		</StoryProfile>
	)
}