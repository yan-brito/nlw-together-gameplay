import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { 
    Container, 
    Content, 
    ContentContainer, 
    Header, Category, 
    Title, 
    PlayersInfo, 
    Player, 
    Footer, 
    DateInfo, 
    Date 
} from './styles';
import { theme } from '../../global/styles/theme';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import GuildIcon from '../GuildIcon';

import { categories } from '../../utils/category';
import { GuildProps } from '../Guild';

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
    const { primary, on, secondary50, secondary70 } = theme.colors;


    return(
        <Container {...rest}>
            <ContentContainer>
                <LinearGradient
                    colors={[ secondary50, secondary70 ]}
                    style={{ 
                        height: 68, 
                        width: 64, 
                        borderRadius: 8, 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        marginRight: 20 
                    }}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
                </LinearGradient>
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