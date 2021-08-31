import React from 'react';
import { FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Banner, BannerContent, Footer, Subtitle, Title } from './styles';
import { theme } from '../../global/styles/theme';

import BannerImg from '../../assets/banner.png';

import Header from '../../components/Header';
import Background from '../../components/Background';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';



export default function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Yan',
            avatar_url: 'https://github.com/yan-brito.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Yan',
            avatar_url: 'https://github.com/yan-brito.png',
            status: 'offline'
        }
    ]

    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <Banner  source={BannerImg} >
                <BannerContent>
                    <Title> Lendários </Title>
                    <Subtitle> É hoje que vamos chegar ao challenger sem perder uma partida da md10 </Subtitle>
                </BannerContent>
            </Banner>

            <ListHeader 
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList 
                data={members}
                keyExtractor={ item => item.id }
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={ () => <ListDivider/> }
                style={{
                    marginLeft: 24,
                    marginTop: 27
                }}
            />
            <Footer>
                <ButtonIcon title="Entrar na partida"/>
            </Footer>
        </Background>
    );
};