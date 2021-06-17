import React from 'react'
import {DivStory} from './styled'
import {Profile} from '../ImageProfile/Profile'
import {SingleStory} from './SingleStory'

export const  Story = () =>{
	return(
		<DivStory>
			<SingleStory size="Large"/>			
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>
			<SingleStory size="Large"/>
		</DivStory>
	)
}