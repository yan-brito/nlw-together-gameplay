import React from 'react';

import { Avatar, Container } from './styles';

import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string | null;
};

export default function GuildIcon({ guildId, iconId }: Props) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

    return(
        <Container>
            {iconId 
                ?
                <Avatar 
                    source={{ uri: uri }}
                    resizeMode="cover"
                />
                :
                <DiscordSvg 
                    width={40} 
                    height={40}
                />
            }

            
        </Container>
    );
};