import React from 'react';
import { Container } from './styles';

type Props = {

};

export default function GuildIcon({}: Props) {

    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg'

    return(
        <Container
            source={{ uri: uri }}
        >
            
        </Container>
    );
};