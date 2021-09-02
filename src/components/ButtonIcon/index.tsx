import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, IconWraper, Title } from './styles';

const  discordIcon = require('../../assets/discord.png');

type Props = TouchableOpacityProps & {
    title: string;
};

export default function ButtonIcon({ title, ...rest } : Props) {
    return (
        <Container {...rest} >
            <IconWraper>
                <Icon source={discordIcon}/>
            </IconWraper>
            <Title>
                { title }
            </Title>
        </Container>
    );
};
