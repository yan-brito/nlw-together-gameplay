import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Content, ContentContainer, Header, Category, Title, PlayersInfo, Player, Footer, DateInfo, Date } from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import GuildIcon from '../GuildIcon';
import { categories } from '../../utils/category';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string,
    name: string,
    icon: null,
    owner: boolean
};

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
};

type Props = TouchableOpacityProps & {
    data: AppointmentProps;
};

export default function Appointment({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on } = theme.colors;


    return(
        <Container {...rest}>
            <ContentContainer>
                <GuildIcon />

                <Content>
                    <Header>
                        <Title> { data.guild.name } </Title>
                        <Category> { category.title } </Category>
                    </Header>
                    <Footer>
                        <DateInfo>
                            <CalendarSvg/>
                            <Date> { data.date } </Date>
                        </DateInfo>
                        <PlayersInfo>
                            <PlayerSvg fill={ owner ? primary : on} />
                            <Player owner={owner}> {owner ? 'Anfitrião' : 'Visitante'} </Player>
                        </PlayersInfo>
                    </Footer>
                </Content>
            </ContentContainer>
        </Container>
    );
};