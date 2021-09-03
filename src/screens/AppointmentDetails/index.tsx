import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Share, Platform } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking'

import { Banner, BannerContent, Footer, Subtitle, Title } from './styles';
import { theme } from '../../global/styles/theme';

import BannerImg from '../../assets/banner.png';

import { api } from '../../services/api';

import Header from '../../components/Header';
import Background from '../../components/Background';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import Load from '../../components/Load';

import { AppointmentProps } from '../../components/Appointment';
import { MemberProps } from '../../components/Member';
import ModalDialog from '../../components/ModalDialog';


type Params = {
    guildSelected: AppointmentProps;
};

type Widget = {
    id: string,
    instant_invite: string,
    name: string,
    members: MemberProps[]
};


export default function AppointmentDetails() {
    const route = useRoute();
    const { guildSelected }  = route.params as Params;

    const [widget, setWidget] = useState<Widget>({} as Widget);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(false);

    const fetchWidgetInfo = async () => {
        try {

            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

            setWidget(response.data);

        } catch (error) {
            setAlert(true);
        } finally {
            setLoading(false);
        };
    };

    const handleOpenGuild = () => {
        Linking.openURL(widget.instant_invite);
    };

    useEffect(() => {
        fetchWidgetInfo();
    }, []);

    const handleShareInvitation = () => {
        const ios = Platform.OS === 'ios';
        const message = ios ? 
        `Junte-se a ${guildSelected.guild.name}! ${widget.instant_invite}` 
        : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });

    };

    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    widget.instant_invite &&
                    <BorderlessButton onPress={handleShareInvitation} >
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
                    <Title> { guildSelected.guild.name } </Title>
                    <Subtitle> { guildSelected.description } </Subtitle>
                </BannerContent>
            </Banner>
            
            {loading
                ? <Load />
                :
                <>
                    <ListHeader 
                        title="Jogadores"
                        subtitle={widget.members ? `Total ${widget.members.length}` : ''}
                    />
                    <FlatList 
                        data={widget.members}
                        keyExtractor={ item => item.id }
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={ () => <ListDivider isCentered /> }
                        style={{
                            marginLeft: 24,
                            marginTop: 27
                        }}
                    />
                </>
            }

            
            <Footer>
                {widget.instant_invite &&
                    <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
                }
            </Footer>
            <ModalDialog visible={alert} title="Verifique as configurações do servidor. Será que o Widget está habilitado?"/>
        </Background>
    );
};