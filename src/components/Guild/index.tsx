import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Content, Title, Type } from './styles';
import { theme } from '../../global/styles/theme';

import GuildIcon from '../GuildIcon';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
};

type Props = TouchableOpacityProps & {
    data: GuildProps
};

export default function Guild({ data, ...rest }: Props) {
    return(
        <Container {...rest} activeOpacity={0.7} >
            <GuildIcon guildId={data.id} iconId={data.icon} />
            <Content>
                <Title> { data.name } </Title>
                <Type> { data.owner ? 'Administrador' : 'Convidado' } </Type>
            </Content>
            <Feather name="chevron-right" color={theme.colors.heading} size={24} />
        </Container>
    );
};