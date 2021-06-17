import React from 'react'
import {StorySingle as Story} from './styled'
import {Profile} from '../ImageProfile/Profile'

export const SingleStory =({size})=>{
	return(
		<Story>
			<Profile size={size} story={false}/>
			<p>NameProfile</p>
		</Story>
	)
}