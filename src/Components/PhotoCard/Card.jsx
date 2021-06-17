import React,{useState} from 'react';
import styled from 'styled-components'
import {Div,DataCard,ProfileInfo,Likes,Comments,Dates,Info,AddComments,Images} from './styles'
import { MdSettings,MdFavoriteBorder,MdSend,MdAddCircleOutline,MdSentimentSatisfied } from 'react-icons/md'
import {Comment} from './Comment'
import {Profile} from '../ImageProfile/Profile'
import {InfoProfile} from '../InfoProfile/InfoProfile'

import {Link} from '../../style/GlobalStyle'


const ReSend=styled(MdSend)`
	margin-left:14px;
`

export const Card = ({id,name,apodo,image,imageProfile,likes,description}) => {
    const [isActive, setActive] = useState(false);

    const handleMouseOver = ()=>{
        if(isActive)
            setActive(false)
        else
            setActive(true)
    }

    return (
    	<Div>
        	<DataCard>
        		<ProfileInfo >
                    <Profile size={'Medium'} image={imageProfile}/>
        			<Link to={"/user"}><p onMouseOver={handleMouseOver}>{name}</p></Link>
                    {isActive && <InfoProfile id={id} onMouseLeave={handleMouseOver}/>}
        		</ProfileInfo>
        		<MdSettings/>
        	</DataCard>
        	<Images src={image} />
        	<DataCard>
        		<div>
        		<MdFavoriteBorder size="24px"/>
        		<ReSend size="24px"/>
        		</div>
        		<MdAddCircleOutline size="24px"/>
        	</DataCard>
        	<Info>
        		<Likes>{likes} Me gusta</Likes>
        		<Comments>{description}</Comments>
        		<Dates>Hace 4 Horas</Dates>
        	</Info>
        	<Comment/>

        </Div>
    );
};

