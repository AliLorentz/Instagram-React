import React,{Fragment} from 'react'
import styled from 'styled-components'
import { MdSentimentSatisfied } from 'react-icons/md'
import {AddComments,Input,Submit} from './StyleComment'

export const Comment = ()=>{

	const handleSubmit = (event) => {
    event.preventDefault()
  }

	return(
		<AddComments>
			<form onSubmit={handleSubmit}>
				<MdSentimentSatisfied size="32px"/>
				<Input type="textarea" name="name" placeholder="Agrega un comentario..."/>
				<Submit type="submit" value="Publicar" />
			</form>
		</AddComments>
	);
}